const mouse = document.querySelector(".home__mouse-icon");
const firstSection = document.querySelector(".about");
const header = document.querySelector("header");

const scrollToSection = () => {
    window.scrollTo({
        top: firstSection.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
}

const LockHeader = () => {
    if(window.scrollY>header.offsetHeight){
        header.classList.add('fixed')
    }
    else header.classList.remove('fixed')
}

window.addEventListener('scroll', LockHeader);
mouse.addEventListener('click', scrollToSection);