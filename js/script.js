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
