import nodemailer, { type Transporter } from "nodemailer";

// Where every lead notification lands. Override with LEAD_NOTIFY_TO if the
// inbox ever changes (comma-separate for multiple recipients).
export const LEAD_INBOX =
  process.env.LEAD_NOTIFY_TO || "officialellordigital@gmail.com";

// SMTP defaults to Gmail. In Gmail: enable 2-Step Verification, then create an
// App Password (myaccount.google.com/apppasswords) and use it as SMTP_PASS —
// a normal account password will be rejected.
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

export const mailConfigured = Boolean(SMTP_USER && SMTP_PASS);

// Reuse one transporter across warm serverless invocations so we don't open a
// fresh SMTP handshake on every submission.
const globalForMail = global as unknown as { _mailer?: Transporter };

function getTransport(): Transporter {
  if (!globalForMail._mailer) {
    globalForMail._mailer = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465 = implicit TLS, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return globalForMail._mailer;
}

export interface LeadMail {
  fullName: string;
  email: string;
  phone: string;
  website?: string;
  details: string;
  service?: string;
  budget?: string;
  source?: string;
}

const SOURCE_LABELS: Record<string, string> = {
  "contact-page": "Contact page form",
  "website-modal": "Strategy-call modal",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rows(lead: LeadMail) {
  return [
    ["Name", lead.fullName],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company website", lead.website || "—"],
    ["Service", lead.service || "—"],
    ["Budget", lead.budget || "—"],
    ["Submitted from", SOURCE_LABELS[lead.source || ""] || lead.source || "Website"],
  ] as const;
}

function textBody(lead: LeadMail) {
  const lines = rows(lead).map(([label, value]) => `${label}: ${value}`);
  return `New enquiry from the ELLOR website\n\n${lines.join(
    "\n"
  )}\n\nProject details:\n${lead.details}\n`;
}

function htmlBody(lead: LeadMail) {
  const cells = rows(lead)
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:8px 16px 8px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
        <td style="padding:8px 0;color:#111827;font-size:15px;">${escapeHtml(String(value))}</td>
      </tr>`
    )
    .join("");

  return `<div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:620px;margin:0 auto;padding:24px;">
    <h2 style="margin:0 0 4px;font-size:20px;color:#111827;">New enquiry from the ELLOR website</h2>
    <p style="margin:0 0 20px;color:#6b7280;font-size:13px;">Reply straight to this email to reach ${escapeHtml(lead.fullName)}.</p>
    <table style="border-collapse:collapse;width:100%;border-top:1px solid #e5e7eb;">${cells}</table>
    <h3 style="margin:24px 0 8px;font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;">Project details</h3>
    <p style="margin:0;color:#111827;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(lead.details)}</p>
  </div>`;
}

// Emails the submission to the ELLOR inbox. Throws if SMTP is unconfigured or
// the send fails — callers decide whether that should fail the request.
export async function sendLeadEmail(lead: LeadMail) {
  if (!mailConfigured) {
    throw new Error(
      "SMTP_USER / SMTP_PASS are not set, so the lead email was not sent."
    );
  }

  await getTransport().sendMail({
    from: `"ELLOR Website" <${SMTP_USER}>`,
    to: LEAD_INBOX,
    replyTo: `"${lead.fullName}" <${lead.email}>`,
    subject: `New enquiry — ${lead.fullName}${lead.service ? ` · ${lead.service}` : ""}`,
    text: textBody(lead),
    html: htmlBody(lead),
  });
}
