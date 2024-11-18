let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper= new Swiper(".review-slider",{
    spaceBetween:20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
     0:   {
        slidesPerView: 1,
    },
    640:{
        slidesPerView: 2,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    },
    },
});