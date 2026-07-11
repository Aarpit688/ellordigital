import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Subscriber from "@/lib/models/Subscriber";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/newsletter — subscribe an email address
export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = (await req.json().catch(() => ({}))) as { email?: string };

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const existing = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ message: "You're already subscribed." }, { status: 200 });
    }

    await Subscriber.create({ email });
    return NextResponse.json({ message: "Subscribed." }, { status: 201 });
  } catch (err) {
    console.error("[newsletter] subscribe failed:", err);
    return NextResponse.json(
      { message: "Could not subscribe right now. Please try again." },
      { status: 500 }
    );
  }
}
