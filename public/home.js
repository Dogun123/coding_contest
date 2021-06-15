'use strict';

const navbarToggleBtn = document.querySelector(".nav__links.nav__links--left");
const navbarSub = document.querySelector("#navbar__sub");

navbarToggleBtn.addEventListener('click',()=>{
    navbarSub.classList.toggle('open');
    console.log('hi')
});
