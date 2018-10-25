const nav = document.querySelector('.__sticky-nav');
const navTop = nav.offsetTop;

stickyNav = () => {
    if (window.scrollY >= navTop) {
        document.body.classList.add('__sticky');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }
    else {
        document.body.classList.remove('__sticky');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', stickyNav);

export default function stickyNav() { }