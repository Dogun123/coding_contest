'use strict';

const linkItems = document.querySelectorAll(".nav__text");
const dropdownMenus = document.querySelectorAll(".dropdown_menu");


linkItems[0].addEventListener('click',()=>{
    dropdownMenus[0].classList.toggle('open');
    if(dropdownMenus[1].className === "dropdown_menu open"){
        dropdownMenus[1].classList.remove('open');
    } else if(dropdownMenus[2].className === "dropdown_menu open"){
        dropdownMenus[2].classList.remove('open');
    }
});

linkItems[1].addEventListener('click',()=>{
    dropdownMenus[1].classList.toggle('open');
    if(dropdownMenus[0].className === "dropdown_menu open"){
        dropdownMenus[0].classList.remove('open');
    } else if(dropdownMenus[2].className === "dropdown_menu open"){
        dropdownMenus[2].classList.remove('open');
    }
});

linkItems[2].addEventListener('click',()=>{
    dropdownMenus[2].classList.toggle('open');
    if(dropdownMenus[1].className === "dropdown_menu open"){
        dropdownMenus[1].classList.remove('open');
    } else if(dropdownMenus[0].className === "dropdown_menu open"){
        dropdownMenus[0].classList.remove('open');
    }
});






