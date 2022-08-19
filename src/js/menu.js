const btnBurger = document.querySelector('.btn-icon--burger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const btnClose = menu.querySelector('.btn-icon--burger-close');

btnBurger.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.toggle('overlay--open');
  menu.classList.toggle('menu--open');
});

btnClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.toggle('overlay--open');
  menu.classList.toggle('menu--open');
});

const menuLinks = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function(e) {
    let current = document.getElementsByClassName("menu__link--active");
    current[0].className = current[0].className.replace(" menu__link--active", "");
    this.className += " menu__link--active";
  });
}

document.body.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    overlay.classList.remove('overlay--open');
    menu.classList.remove('menu--open');
  };
}, false);

overlay.addEventListener('click', function() {
  menu.classList.remove('menu--open');
  this.classList.remove('overlay--open');
});

const langSwitchLinks = document.querySelectorAll('.menu__lang-switcher-link');

for (let i = 0; i < langSwitchLinks.length; i++) {
  langSwitchLinks[i].addEventListener('click', function(e) {
    let current = document.getElementsByClassName("menu__lang-switcher-link--active");
    current[0].className = current[0].className.replace(" menu__lang-switcher-link--active", "");
    this.className += " menu__lang-switcher-link--active";
  });
}