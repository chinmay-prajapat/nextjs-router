import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return NextResponse.json({ success: true, data });
}
