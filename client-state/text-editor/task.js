const storeText = localStorage.getItem('textarea');
const textOfCard = document.getElementById('editor');
if (storeText !== null) {
    textOfCard.value = storeText;
};

textOfCard.addEventListener('input', (event) => {
    localStorage.textarea = event.target.value;});