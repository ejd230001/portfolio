const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const back = document.querySelector(".back");

menu.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
});

back.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)";
});

const aboutButton = document.querySelector(".about-nav");
const projectButton = document.querySelector(".project-nav");
const contactButton = document.querySelector(".contact-nav");

aboutButton.addEventListener("click", () => {
    const target = document.querySelector(".about")
    const offset = 80;

    const elementPosition = target.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    })
})

projectButton.addEventListener("click", () => {
    const target = document.querySelector(".projects")
    const offset = 80;

    const elementPosition = target.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    })
})

contactButton.addEventListener("click", () => {
    const target = document.querySelector(".contact")
    const offset = 80;

    const elementPosition = target.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    })
})