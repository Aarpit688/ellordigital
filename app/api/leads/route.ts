import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Lead from "@/lib/models/Lead";

// Mongoose needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/leads — create a lead. Shared by the contact-page form
// (source: "contact-page") and the "Book a Free Strategy Call" modal
// (source: "website-modal").
export async function POST(req: Request) {
  try {
    await connectDB();
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

    const lead = await Lead.create({
      fullName,
      email,
      phone,
      website,
      details,
      service,
      budget,
      source: source || "website-modal",
    });
    return NextResponse.json(
      { id: lead._id, message: "Lead received." },
      { status: 201 }
    );
  } catch (err) {
    console.error("[leads] create failed:", err);
    return NextResponse.json(
      { message: "Could not save your request. Please try again." },
      { status: 500 }
    );
  }
}

// No GET here on purpose: leads contain personal contact info, so the list is
// not exposed over a public URL. View submissions in MongoDB Atlas/Compass,
// or add an authenticated admin route when you build an internal dashboard.
