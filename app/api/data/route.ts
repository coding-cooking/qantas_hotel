import { NextResponse } from "next/server";
import data from "@/mock/data.json";

export async function GET() {
    return NextResponse.json(data.results, { status: 200 });
}