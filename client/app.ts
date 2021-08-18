document.querySelectorAll(".toggle").forEach((elem) => {
  elem.addEventListener("click", (ev) => {
    elem.classList.toggle("toggled");
  });
});
