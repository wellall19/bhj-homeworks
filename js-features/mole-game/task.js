const NUM_OF_HOLES = 9;

for (let i = 1; i <= NUM_OF_HOLES; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = actionClick;
}

function actionClick() {
    killBat = document.getElementById('dead');
    cntKillBat = Number(killBat.textContent);
    lostBat = document.getElementById('lost');
    cntlostBat = Number(lostBat.textContent);
    if (this.className === 'hole hole_has-mole') {
        cntKillBat++;
        killBat.textContent = cntKillBat.toString();
        if(cntKillBat === 10) {
            alert('Победа!');
            killBat.textContent = '0';
            lostBat.textContent = '0';
        }
    }
    else {
        cntlostBat++;
        lostBat.textContent = cntlostBat.toString();
        if (cntlostBat === 5) {
            alert('Вы проиграли!');
            killBat.textContent = '0';
            lostBat.textContent = '0';
        }
    }
}