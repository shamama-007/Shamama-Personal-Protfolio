// Navbar Sticky
window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("#navbar");
  navbar.classList.toggle("sticky", window.scrollY > 150);
});

// Navbar Control
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
burger.addEventListener("click", () => {
  const mainMenu = document.querySelector(".mainMenu");
  const item = document.querySelectorAll(".mainMenu ul a");
  item.forEach((element) => {
    setTimeout(() => {
      element.classList.add("smooth");
    }, 200);
  });
  mainMenu.classList.add("active");
});
close.addEventListener("click", () => {
  const mainMenu = document.querySelector(".mainMenu");
  const item = document.querySelectorAll(".mainMenu ul a");
  item.forEach((element) => {
    element.classList.remove("smooth");
  });
  mainMenu.classList.remove("active");
});

let year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();
