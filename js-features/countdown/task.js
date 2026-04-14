let element = document.getElementById("timer");
let cnt = Number(element.textContent);
setInterval(() => {
    if (cnt === 0) {
        alert("Вы победили в конкурсе!")
    }
    else {
        cnt = cnt - 1;
        element.textContent = cnt.toString();
    }
},1000);