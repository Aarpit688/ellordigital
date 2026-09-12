import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Lead from "@/lib/models/Lead";
import { sendLeadEmail } from "@/lib/mail";

// Mongoose + nodemailer need the Node.js runtime (not Edge).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/leads — create a lead. Shared by the contact-page form
// (source: "contact-page") and the "Book a Free Strategy Call" modal
// (source: "website-modal"). Every submission is stored in MongoDB *and*
// emailed to the ELLOR inbox; the request only fails if both of those fail,
// so a mail outage never costs us a lead (and vice versa).
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Record<string, string>;
  const { fullName, email, phone, website, details, service, budget, source } = body;

  if (!fullName || !email || !phone || !details) {
    return NextResponse.json(
      { message: "Full name, email, phone, and project details are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Company website is optional — normalise a bare domain so the saved/emailed
  // value is still a usable link.
  const site = (website || "").trim();
  const normalisedSite =
    site && !/^https?:\/\//i.test(site) ? `https://${site}` : site;

  const lead = {
    fullName,
    email,
    phone,
    website: normalisedSite,
    details,
    service,
    budget,
    source: source || "website-modal",
  };

  const [saved, mailed] = await Promise.allSettled([
    (async () => {
      await connectDB();
      return Lead.create(lead);
    })(),
    sendLeadEmail(lead),
  ]);

  if (saved.status === "rejected") {
    console.error("[leads] DB save failed:", saved.reason);
  }
  if (mailed.status === "rejected") {
    console.error("[leads] notification email failed:", mailed.reason);
  }

  if (saved.status === "rejected" && mailed.status === "rejected") {
    return NextResponse.json(
      { message: "Could not save your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      id: saved.status === "fulfilled" ? saved.value._id : undefined,
      message: "Lead received.",
    },
    { status: 201 }
  );
}

// No GET here on purpose: leads contain personal contact info, so the list is
// not exposed over a public URL. View submissions in MongoDB Atlas/Compass,
// or add an authenticated admin route when you build an internal dashboard.
