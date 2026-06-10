let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onload = function() {
    const loaderImg = document.querySelector('.loader_active');
    loaderImg.classList.remove('loader_active');

    const responseObj = JSON.parse(xhr.response);
    const items = responseObj.response.Valute;
    const listItems = document.getElementById('items');
    
    for (const item in items) {
        const newItem = 
        `<div class="item">
        <div class="item__code">
            ${items[item].CharCode}
        </div>
        <div class="item__value">
            ${items[item].Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
        </div>`;
        listItems.insertAdjacentHTML("beforeend", newItem);
    }
};
