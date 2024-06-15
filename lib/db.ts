//
import { Book } from "@prisma/client";
import prisma from "@lib/prisma";

// Upsert Book
async function upsertBook(x: Book): Promise<Book[]>
{
  let books: Book[] = [];

  try
  {
    await prisma.book.upsert({
      where:
      {
        title: x.title
      },
      create:
      {
        title: x.title,
        author: x.author,
        pages: +x.pages,
        publishedAt: new Date(x.publishedAt)
      },
      update:
      {
        author: x.author,
        pages: +x.pages,
        publishedAt: new Date(x.publishedAt)
      }
    });
  }
  catch (err: unknown)
  {
    console.error(err);
  }
  finally
  {
    await prisma.$disconnect();
  }

  return books;
}

export { upsertBook };