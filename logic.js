const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const goToTop = document.querySelector("#go-to-top");
const nav = document.querySelector(".nav-bar");
hamburgerMenu.addEventListener("click",(e)=>{
    e.stopPropagation();
    headerContent.classList.add("menu-open");

})
closeIcon.addEventListener("click",()=>{
    headerContent.classList.remove("menu-open");

})
nav.addEventListener("click",(e)=>{
    e.stopPropagation();

})
goToTop.addEventListener("click",()=>{
    window.scrollTo(0, 0);
})
window.addEventListener("click",(e)=>{
    // console.log(e);
    e.stopPropagation();
    headerContent.classList.remove("menu-open");

})


