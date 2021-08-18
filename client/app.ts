import type { Book } from "../models/books";

document.querySelectorAll(".toggle").forEach((elem) => {
  elem.addEventListener("click", (ev) => {
    elem.classList.toggle("toggled");
  });
});

fetch("/books")
  .then((res) => res.json())
  .then((result: Book[]) => {
    console.log(result.map((el) => el.title).join("\n"));
  });
