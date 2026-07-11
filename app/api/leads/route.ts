import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Lead from "@/lib/models/Lead";

// Mongoose needs the Node.js runtime (not Edge). force-dynamic keeps the
// GET listing fresh instead of being statically cached.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// POST /api/leads — create a lead from the "Book a Free Strategy Call" modal
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

// GET /api/leads — list leads (demo/admin use only; add auth before production)
export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(100);
    return NextResponse.json(leads);
  } catch (err) {
    console.error("[leads] list failed:", err);
    return NextResponse.json({ message: "Could not fetch leads." }, { status: 500 });
  }
}
