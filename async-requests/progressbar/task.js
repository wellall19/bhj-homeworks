const form = document.getElementById('form');

function funcSend(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    const progressElement = document.getElementById('progress');
    xhr.upload.onprogress = function(event) {
        progressElement.value = event.loaded / event.total;
    }

    xhr.open('POST', form.getAttribute('action'));
    xhr.send(formData);
};

form.addEventListener('submit', funcSend)

