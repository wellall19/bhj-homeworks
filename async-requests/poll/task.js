let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.onload = function() {
    const responseObj = JSON.parse(xhr.response);
    const answers = responseObj.data.answers;
    pollTitle.textContent = responseObj.data.title;
    for (const answer in answers) {
        const newButton = document.createElement('button');
        newButton.textContent = answers[answer];
        newButton.addEventListener('click', (element) => {
            alert('Спасибо, ваш голос засчитан!');
        })
        pollAnswers.insertAdjacentElement("beforeend", newButton);
    }
}