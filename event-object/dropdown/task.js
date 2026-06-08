const dropdownValue = document.querySelector('.dropdown__value');
const list = document.querySelector('ul.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('li.dropdown__item'));

function dropdownList() { 
    list.classList.toggle('dropdown__list_active');
}

function choiceItem(event) {
    event.preventDefault();
    const clickedItem = event.target.closest('.dropdown__item');
    dropdownValue.textContent = clickedItem.textContent;
    list.classList.remove('dropdown__list_active');
}

dropdownValue.addEventListener('click', dropdownList);
dropdownItems.forEach((item) => { 
    item.addEventListener('click', choiceItem) 
});