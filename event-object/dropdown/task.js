const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));
const lists = Array.from(document.querySelectorAll('ul.dropdown__list'));
const dropdownItems = Array.from(document.querySelectorAll('li.dropdown__item'));

function dropdownList() { 
    lists.forEach((el) => el.classList.toggle('dropdown__list_active'));
}

function choiceItem(event) {
    event.preventDefault();
    const clickedItem = event.target.closest('.dropdown__item');
    dropdownValues.forEach((el) => el.textContent = clickedItem.textContent);
    lists.forEach((el) => el.classList.remove('dropdown__list_active'));
}

dropdownValues.forEach((el) => el.addEventListener('click', dropdownList));
dropdownItems.forEach((item) => { 
    item.addEventListener('click', choiceItem) 
});