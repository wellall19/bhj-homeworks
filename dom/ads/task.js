const rotatorsList = Array.from(document.querySelectorAll('.rotator .rotator__case'));
const rotatorsListLength = rotatorsList.length;
let currentIndex = rotatorsList.findIndex(
    el => el.classList.contains('rotator__case_active'));

setInterval(function() {
    rotatorsList[currentIndex].classList.remove('rotator__case_active');
    currentIndex = (currentIndex + 1) % rotatorsListLength;
    rotatorsList[currentIndex].classList.add('rotator__case_active');
}, 1000)