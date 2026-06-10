const welcomeWindow = document.querySelector('.welcome');
const signinWindow = document.querySelector('.signin');
const spanId = document.getElementById('user_id');
const savedUserId = localStorage.getItem('user_id');

if (savedUserId) {
    signinWindow.classList.remove('signin_active');
    spanId.textContent = savedUserId;
    welcomeWindow.classList.add('welcome_active');
}

const form = document.querySelector('form');

function submitForm(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    xhr.open('POST', form.getAttribute('action'));
    xhr.send(formData);
    xhr.onload = function() {
        const responseObj = JSON.parse(xhr.response);
        if (responseObj['success'] === true) {
            localStorage.setItem('user_id', responseObj.user_id);
            
            signinWindow.classList.remove('signin_active');
            
            spanId.textContent = String(responseObj['user_id']);
            welcomeWindow.classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль');
        }
    }
}

form.addEventListener('submit', submitForm);