const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const icons = document.querySelectorAll('.icons');
const header2 = document.querySelector('.secondHeader');
const hamburger = document.querySelector('.fa-bars');
const closed = document.querySelector('.fa-window-close');

menu.addEventListener('click', function () {
  navbar.classList.toggle('shownav');
  closed.classList.toggle('show');
  hamburger.classList.toggle('hide');
  // navbar.animate(keyframes)
})


let countDownDate = new Date("Jul 30, 2021 16:37:52").getTime();

let myTimer = setInterval(function () {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days + "d "
  document.getElementById("hour").innerHTML = hours + "h "
  document.getElementById("minute").innerHTML = minutes + "m "
  document.getElementById("second").innerHTML = seconds + "s"
}, 1000)

window.onscroll = function () { mySticky() };

let sticky = header2.offsetTop;

function mySticky() {
  if (window.pageYOffset >= sticky) {
    header2.classList.add("sticky")
  } else {
    header2.classList.remove("sticky");
  }
}