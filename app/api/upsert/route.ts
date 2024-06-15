import { NextResponse, type NextRequest } from "next/server";
//
import { Book } from "@prisma/client";
import { upsertBook } from "@lib/db";

// Upsert
export async function POST(req: NextRequest): Promise<NextResponse<Book[]>>
{
  const book: Book = await req.json();
  const books: Book[] = await upsertBook(book);

  return NextResponse.json(books);
}