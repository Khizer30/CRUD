//
import { type Book } from "@prisma/client";

// Book Object
const bookObj: Book =
{
  id: 0,
  title: "",
  author: "",
  pages: 0,
  publishedAt: new Date()
};

export { bookObj };