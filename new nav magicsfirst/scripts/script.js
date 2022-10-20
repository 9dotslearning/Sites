let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");


menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "0";
});
closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "-100%";
});

/*
let htmlcss-arrow = document.querySelector("htmlcss-arrow");
htmlcss-arrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show1");
});
*/