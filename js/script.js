/*===== SIDEBAR NAV =====*/

let navbar = document.querySelector(".header .navbar");

document.querySelector("#hamburger").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

document
  .querySelectorAll(".about-section .video-container .controls .control-btn")
  .forEach((btn) => {
    btn.onclick = () => {
      let src = btn.getAttribute("data-src");
      document.querySelector(".about-section .video-container .video").src = src;
    };
  });
