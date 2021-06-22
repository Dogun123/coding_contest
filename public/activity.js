'use strict';

const navToggle = document.querySelector('.navbar__column__toggle');
const navBar = document.querySelector('#navbar__column');


navToggle.addEventListener('click',()=>{
    navBar.classList.toggle('show');
});