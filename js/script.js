/*===== SIDEBAR NAV =====*/

const sidebarNav = document.querySelector(".sidebar-nav");

function openNav() {
  sidebarNav.style.width = "350px";
}

function closeNav() {
  sidebarNav.style.width = "0px";
}

document
  .querySelector(".sidebar-close-btn")
  .addEventListener("click", closeNav);

document.querySelector(".hamburger").addEventListener("click", openNav);

//

/*===== HAMBURGER COLLAPSE =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//LOADER

const fadeoutWrapper = document.querySelector(".loader-wrapper");

function fadeout() {
  const fade = setInterval(() => {
    if (fadeoutWrapper.style.opacity === 0) {
      fadeoutWrapper.style.opacity = 1;
    }
    if (fadeoutWrapper.style.opacity > 0) {
      fadeoutWrapper.style.opacity -= 1;
    }
  }, 300);
}

window.addEventListener("load", function () {
  setTimeout(() => {
    fadeoutWrapper.style.display = "none";
  }, 1000);
});

//H
