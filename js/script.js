/*===== SIDEBAR NAV =====*/

const navbar = document.querySelector(".header .nav");

document.querySelector("#hamburger").onclick = () => {
  navbar.classList.toggle("active-link");
};

window.onscroll = () => {
  navbar.classList.remove("active-link");
};

document
  .querySelectorAll(".about-section .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about-section .video-container .video").src = src;
    };
  });
