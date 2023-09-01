const imgs = document.querySelectorAll(".grid li");
const sections = document.querySelectorAll(".content section");

function activeSection(index) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  sections[index].classList.add("active");
}
imgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    activeSection(index);
  });
});

const textImg = document.querySelectorAll(".name");
const coloring = document.querySelector(".coloring");
const people = document.querySelectorAll(".person");
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    people.forEach((person) => {
      person.classList.remove("coloring");
    });
    img.classList.add("coloring");
  });
});
