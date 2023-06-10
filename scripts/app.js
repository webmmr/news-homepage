const btn = document.getElementById("mobile-btn");
const mobileNav = document.querySelector(".mobile-nav");

btn.addEventListener("click", handleMobileNav);

function handleMobileNav() {
  btn.classList.toggle("open");
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("slide-right");
}
