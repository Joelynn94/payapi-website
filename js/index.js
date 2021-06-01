const toggleButton = document.querySelector('#jsToggleButton');
let toggleImg = document.querySelector('#jsToggleImg').src;
const navigationList = document.querySelector('.navigation__list');

console.log(toggleButton);
console.log(toggleImg);

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

function changeToggleImg() {
  toggleImg = toggleImg === menuSvg ? closeSvg : menuSvg;
}

function menuToggle() {
  // when the menu is clicked, the opposite state of isOpen
  isOpen = !isOpen;

  // if isOpen === false - open menu
  if (isOpen) {
    openMenu();
    changeToggleImg();
  }
  // if isOpen === true - close menu
  if (!isOpen) {
    closeMenu();
    changeToggleImg();
  }
}

toggleButton.addEventListener('click', menuToggle);
