const nav = document.querySelector(".open-nav");
const navbar = document.getElementById("navbar");
const hum = document.querySelector(".hum");
const NEW = document.getElementById("new");
const QRbtn = document.querySelector(".qr-code-btn");
var bodyNode = document.body;

const QRwindow = document.querySelector(".qr-code-container");

hum.addEventListener("click", (e) => {
  e._isClick = true;
  nav.classList.add("open");
  navbar.classList.add("shadow-up");
  bodyNode.classList.add("opened");
});

document.body.addEventListener("click", (e) => {
  if (e._isClick == true) return
  nav.classList.remove("open");
  navbar.classList.remove("shadow-up");
  bodyNode.classList.remove("opened");
});

QRbtn.addEventListener("click", (e) => {
  e.preventDefault();
  NEW.classList.add("new-opacity");
  QRwindow.classList.add("show-qr")
});

let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});