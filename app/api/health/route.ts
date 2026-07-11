import { NextResponse } from "next/server";

export const runtime = "nodejs";

// GET /api/health
export async function GET() {
  return NextResponse.json({ status: "ok" });
}
