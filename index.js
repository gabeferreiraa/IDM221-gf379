const hamburger = document.querySelector(".hamburger");
const headermenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headermenu.classList.toggle("active");
});
