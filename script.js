const navbarButton = document.querySelector("#icon");
const navbar = document.querySelector(".navbar");

navbarButton.addEventListener("click", toggleNavBar);

function toggleNavBar() {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    navbarButton.classList.replace("fa-xmark", "fa-bars");
  } else {
    navbar.classList.add("active");
    navbarButton.classList.replace("fa-bars", "fa-xmark");
  }
}
