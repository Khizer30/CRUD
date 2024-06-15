import { NextResponse } from "next/server";
//
import { Book } from "@prisma/client";
import { readBooks } from "@lib/db";

// Read
export async function POST(): Promise<NextResponse<Book[]>>
{
  const books: Book[] = await readBooks();

  return NextResponse.json(books);
}