const mouse = document.querySelector('.home__mouse-icon');
const firstSection = document.querySelector('.about');
const header = document.querySelector('.header');
const orderBtn = document.querySelector('.catering__order-button');
const closeBtn = document.querySelector('.form__close-button');
const bookForm = document.querySelector('.book-order');
const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__element');
const sections = document.querySelectorAll('.section');

const scrollToFirstSection = () => {
    window.scrollTo({
        top: firstSection.offsetTop,
        left: 0,
        behavior: 'smooth'
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
    document.body.classList.toggle('lock-scroll');
};

const showNav = () => {
    if (
        window.getComputedStyle(menuBtn).getPropertyValue('display') === 'block'
    ) {
        menuBtn.classList.toggle('is-active');
        nav.classList.toggle('visible');
        document.body.classList.toggle('lock-scroll');
    }
};

const changeActiveSection = () => {
    sections.forEach(section => {
        if (
            window.scrollY >= section.offsetTop - nav.offsetHeight &&
            window.scrollY < section.offsetTop + section.offsetHeight
        ) {
            navItems.forEach(item => {
                if (item.dataset.name === section.classList[0]) {
                    item.classList.add('nav__element--active');
                    //window.location.hash = section.id;
                } else {
                    item.classList.remove('nav__element--active');
                }
            });
            //console.log(section.classList[0]);
        }
    });
    //console.log(window.scrollY);
};

const scrollToSection = e => {
    e.preventDefault();
    const anchor = e.target.dataset.name;
    const section = [...sections].find(section =>
        section.classList.contains(anchor)
    );
    window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', lockHeader);
window.addEventListener('scroll', changeActiveSection);
mouse.addEventListener('click', scrollToFirstSection);
orderBtn.addEventListener('click', showBookForm);
closeBtn.addEventListener('click', showBookForm);
menuBtn.addEventListener('click', showNav);
navItems.forEach(item => item.addEventListener('click', scrollToSection));
navItems.forEach(item => item.addEventListener('click', showNav));
