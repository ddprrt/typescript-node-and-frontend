import express from "express";
import type { Book } from "../models/books";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/books", (req, res) => {
  const books: Book[] = [];
  books.push({
    author: "Stefan Baumgartner",
    title: "TypeScript in 50 Lessons",
    isbn: "978-3-945749-90-6",
  });
  res.send(books);
});
