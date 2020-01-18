const mouse = document.querySelector('.home__mouse-icon');
const firstSection = document.querySelector('.about');
const header = document.querySelector('.header');
const orderBtn = document.querySelector('.catering__order-button');
const closeBtn = document.querySelector('.form__close-button');
const bookForm = document.querySelector('.book-order');
const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const scrollToSection = () => {
  window.scrollTo({
    top: firstSection.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
};

const lockHeader = () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('fixed');
  } else header.classList.remove('fixed');
};

const showBookForm = () => {
  bookForm.classList.toggle('visible');
  bookForm.style.top = `${window.scrollY}px`;
  document.body.classList.toggle('lockScroll');
};

const showNav = () => {
  menuBtn.classList.toggle('is-active');
  nav.classList.toggle('visible');
  document.body.classList.toggle('lockScroll');
};

window.addEventListener('scroll', lockHeader);
mouse.addEventListener('click', scrollToSection);
orderBtn.addEventListener('click', showBookForm);
closeBtn.addEventListener('click', showBookForm);
menuBtn.addEventListener('click', showNav);
