//
import { type Book } from "@prisma/client";

// Book Object
const bookObj: Book =
{
  title: "",
  author: "",
  pages: 0,
  publishedAt: new Date()
};

export { bookObj };