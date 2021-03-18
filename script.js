const backgroundImages = document.querySelectorAll('.background');
const centreImages = document.querySelectorAll('.centre');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {

    var target = document.querySelector('.active');
    var index = [].indexOf.call(backgroundImages, target);

    backgroundImages[index].classList.remove('active');
    centreImages[index].classList.remove('visible');

    if (index === 0) {
        backgroundImages[5].classList.add('active');
        centreImages[5].classList.add('visible');
    } else {
        backgroundImages[index - 1].classList.add('active');
        centreImages[index - 1].classList.add('visible');
    }

})

next.addEventListener('click', () => {

    var target = document.querySelector('.active');
    var index = [].indexOf.call(backgroundImages, target);

    backgroundImages[index].classList.remove('active');
    centreImages[index].classList.remove('visible');

    if (index === 5) {
        backgroundImages[0].classList.add('active');
        centreImages[0].classList.add('visible');
    } else {
        backgroundImages[index + 1].classList.add('active');
        centreImages[index + 1].classList.add('visible');
    }

})