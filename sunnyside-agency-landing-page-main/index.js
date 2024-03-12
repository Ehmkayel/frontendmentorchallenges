const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav")

hamburger.addEventListener("click", () =>{
    menu.style.display = "flex";
    hamburger.style.display="none";
    closeNav.style.display = "inline-block";
})

closeNav.addEventListener("click", () => {
    menu.style.display = "none";
    hamburger.style.display = "inline-block";
    closeNav.style.display = "none";
})