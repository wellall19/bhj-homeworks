const clicker = document.getElementById('clicker__counter');
let clickerCounter = Number(clicker.textContent);
const coockiImage = document.getElementById('cookie');

function changeClick() {
    clickerCounter++;
    clicker.textContent = clickerCounter.toString();
    if (coockiImage.width == 200) {
        coockiImage.width = 170;
    }
    else {
        coockiImage.width = 200;
    }
}
coockiImage.onclick = changeClick;