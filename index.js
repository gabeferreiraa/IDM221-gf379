const hamburgermenu = document.querySelector(".hamburger-menu");
const headermenu = document.querySelector(".header__menu");

hamburgermenu.addEventListener("click", () => {
  headermenu.classList.toggle("mobile-menu");
});
