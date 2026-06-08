const reveals = Array.from(document.querySelectorAll('.reveal'));

function isInViewport(element){
    const elementVie = element.getBoundingClientRect();
    return elementVie.top < window.innerHeight && elementVie.bottom > 0 
};

function scrolling() {
    reveals.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('reveal_active');
        }
        else {
            el.classList.remove('reveal_active');
        }
    })
}

document.addEventListener('scroll', scrolling);