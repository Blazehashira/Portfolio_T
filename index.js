const hamburgerMenu = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const hiddenLink = document.querySelectorAll(".hiddenLink");
const body = document.querySelector("body");
const crescent = document.getElementById("crescent");
const year = new Date().getFullYear();
const copyRight = document.getElementById("copyright");
console.log(year);

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white");
});
hiddenLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white");
  });
});

crescent.addEventListener("click", () => {
  body.classList.toggle("dark");
});

copyRight.innerText = `© ${year} Nasir Moahmmed Sani`;
