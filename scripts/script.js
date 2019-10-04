let slides = document.getElementsByClassName('authors-slider__item');
let indicator = document.getElementById('indicator');
let allIndecators = document.getElementsByClassName('authors-slider__indicator');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000);

for(let i = 0; i < slides.length; i++){
    let indicators = document.createElement('a');

    indicators.className = 'authors-slider__indicator';
    indicator.appendChild(indicators);
}

allIndecators[currentSlide].className = 'authors-slider__indicator selected';

function nextSlide() {
    for(let j = 0; j < allIndecators.length; j++) {
        allIndecators[j].addEventListener('click', function () {
            clearInterval(slideInterval);
            slides[currentSlide].className = 'authors-slider__item';
            allIndecators[currentSlide].className = 'authors-slider__indicator';
            slides[j].className = 'authors-slider__item showing';
            allIndecators[j].className = 'authors-slider__indicator selected';
            currentSlide = j;
            slideInterval = setInterval(nextSlide, 3000);
        })
    }
    console.log(currentSlide);
    slides[currentSlide].className = 'authors-slider__item';
    allIndecators[currentSlide].className = 'authors-slider__indicator';
    currentSlide++;
    if(currentSlide >= slides.length) currentSlide = 0;
    slides[currentSlide].className = 'authors-slider__item showing';
    allIndecators[currentSlide].className = 'authors-slider__indicator selected';

}

