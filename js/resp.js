// Use window.matchMedia with the correct media query format
let screensize = window.matchMedia("(max-width: 1200px)");

if (screensize.matches) {
  // Wrap your code inside this condition to only execute it when the media query matches

  let burger = document.getElementById("burger");
  let rightnav = document.getElementById("rightnav");
  let main = document.getElementById("main");

  burger.addEventListener("click", () => {
    if (rightnav.style.display === "none" || rightnav.style.display === "") {
      rightnav.style.display = "block";
      rightnav.style.animation = "burgeranimation 2s";
    } else {
      rightnav.style.display = "none";
    }
  });

  main.addEventListener("click", () => {
    rightnav.style.display = "none";
  });

  let resumenav = document.getElementById("resumenav");
  let resumenavlist = document.getElementsByClassName("resumenavlistjs");
  let resumenavtoggle = document.getElementById("resumenavtoggle");

  resumenav.addEventListener("click", () => {
    if (resumenavlist[0].style.display === "none" || resumenavlist[0].style.display === "") {
      for (let index = 0; index < resumenavlist.length; index++) {
        resumenavlist[index].style.display = "block";
      }
    } else {
      for (let index = 0; index < resumenavlist.length; index++) {
        resumenavlist[index].style.display = "none";
      }
    }
  });
}
