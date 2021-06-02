const toggleButton = document.querySelector('#jsToggleButton');
let toggleImg = document.querySelector('#jsToggleImg');
const navigationList = document.querySelector('.navigation__list');

// Set toggle button img icons
const menuSvg = './assets/shared/mobile/menu.svg';
const closeSvg = './assets/shared/mobile/close.svg';
// global state for mobile menu
let isOpen = false;

function openMenu() {
  navigationList.classList.add('open');
  navigationList.classList.remove('close');
}

function closeMenu() {
  navigationList.classList.remove('open');
  navigationList.classList.add('close');
}

function changeToggleImg(img) {
  toggleImg.src = menuSvg;
  if (img) {
    toggleImg.src = img;
  }
}

function menuToggle() {
  // when the menu is clicked, the opposite state of isOpen
  isOpen = !isOpen;

  // if isOpen === false - open menu
  if (isOpen) {
    openMenu();
    changeToggleImg(closeSvg);
  }
  // if isOpen === true - close menu
  if (!isOpen) {
    closeMenu();
    changeToggleImg(menuSvg);
  }
}

toggleButton.addEventListener('click', menuToggle);
