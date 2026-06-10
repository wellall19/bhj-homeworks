function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
    return null;
}
const modalClosed = getCookie('ClosedSubscribeModal');
if (modalClosed === null) {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal_active');

    const modalClose = document.querySelector('.modal__close');
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        document.cookie = 'ClosedSubscribeModal=true';
    })
}