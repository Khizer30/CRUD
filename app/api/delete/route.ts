import { NextResponse, type NextRequest } from "next/server";
//
import { Book } from "@prisma/client";
import { deleteBook } from "@lib/db";

// Delete
export async function POST(req: NextRequest): Promise<NextResponse<Book[]>>
{
  const book: Book = await req.json();
  const books: Book[] = await deleteBook(book);

  return NextResponse.json(books);
}