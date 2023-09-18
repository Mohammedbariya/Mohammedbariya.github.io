let burger = document.getElementById('burger');
let rightnav = document.getElementById('rightnav');
let main = document.getElementById('main')

burger.addEventListener('click', () => {
    if (rightnav.style.display == "none") {
        rightnav.style.display = "block";
        rightnav.style.animation = "burgeranimation 2s";
        // rightnav.style.opacity = 1;
    } else {
        rightnav.style.display = "none";
        // rightnav.style.opacity = 0;
    }
});
main.addEventListener('click',()=>{
    rightnav.style.display = "none";
});

let resumenav = document.getElementById('resumenav');
let resumenavlist = document.getElementsByClassName("resumenavlist")
// let resumenavlist = document.getElementById('resumenavlist');
let resumenavtoggle = document.getElementById('resumenavtoggle');


resumenav.addEventListener('click', () => {
    if (resumenavlist[0].style.display == "none") {
        for (let index = 0; index < resumenavlist.length; index++) {
            resumenavlist[index].style.display = "block";
        }

    } else {
        for (let index = 0; index < resumenavlist.length; index++) {
            resumenavlist[index].style.display = "none";
        }
    }
});