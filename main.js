const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu');
const sideMenu = document.querySelector('.side-menu');

function openSideMenu() {
  sideMenu.classList.add('open-menu');
}

function closeSideMenu() {
  sideMenu.classList.remove('open-menu');
}

menuBtn.addEventListener('click', openSideMenu);
closeBtn.addEventListener('click', closeSideMenu);
