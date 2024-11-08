import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const urls = await prisma.url.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    return NextResponse.json(urls);
  } catch (error) {
    console.error("Error fetching URLs: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
