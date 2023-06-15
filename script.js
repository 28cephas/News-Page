const modal = document.querySelector('.modal');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('ul');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

modal.addEventListener('click', () => {
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
  nav.classList.toggle('active');
  overlay.classList.toggle('hidden');
  body.classList.toggle('hid');
});
