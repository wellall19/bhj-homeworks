const sizes = Array.from(document.querySelectorAll('.book__control_font-size .font-size'));
const bookContent = document.querySelector('.book');

function clickIcon(event) {
    event.preventDefault();
    const activeIcon = document.querySelector('.font-size_active');
    if (event.target === activeIcon) return;
    activeIcon.classList.remove('font-size_active');
    
    event.target.classList.add('font-size_active');

    bookContent.classList.remove('book_fs-small', 'book_fs-big');
    const size = event.target.dataset.size;
    if (size === 'small') {
        bookContent.classList.add('book_fs-small');
    } else if (size === 'big'){
        bookContent.classList.add('book_fs-big');
    }     
}

sizes.forEach((size) => size.addEventListener('click', clickIcon));