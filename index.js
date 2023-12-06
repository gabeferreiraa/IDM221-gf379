const hamburger = document.querySelector(".hamburger");
const headermenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  headermenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
