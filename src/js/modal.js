const btnCall = document.querySelectorAll('.btn-icon--call');
const btnChat = document.querySelectorAll('.btn-icon--chat');
const btnClose = document.querySelectorAll('.modal__close');

const modalCall = document.querySelector('#modal-call');
const modalChat = document.querySelector('#modal-chat');

for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener('click', function(e) {
    e.preventDefault();
    modalCall.classList.add('modal--open');
    modalCall.addEventListener('click', function(e) {
      if (!e.target.closest('.modal__content')) {
        modalCall.classList.remove('modal--open');
      }
    });
  });
}

for (let i = 0; i < btnChat.length; i++) {
  btnChat[i].addEventListener('click', function(e) {
    e.preventDefault();

    modalChat.classList.add('modal--open');
    modalChat.addEventListener('click', function(e) {
      if (!e.target.closest('.modal__content')) {
        modalChat.classList.remove('modal--open');
      }
    });
  });
}

for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener('click', function(e) {
    e.preventDefault();

    modalChat.classList.remove('modal--open');
    modalCall.classList.remove('modal--open');
  });
}

document.body.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    modalChat.classList.remove('modal--open');
    modalCall.classList.remove('modal--open');
  };
}, false);


