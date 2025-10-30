const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const back = document.querySelector(".back");

menu.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
})

back.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
})