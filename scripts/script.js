let slides = document.getElementsByClassName('authors-slider__item');
let indicator = document.getElementById('indicator');
let allIndecators = document.getElementsByClassName('authors-slider__indicator');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

for(let i = 0; i < slides.length; i++){
    let indicators = document.createElement('a');

    indicators.className = 'authors-slider__indicator';
    indicator.appendChild(indicators);
}

allIndecators[currentSlide].className = 'authors-slider__indicator selected';

function nextSlide() {
    slides[currentSlide].className = 'authors-slider__item';
    allIndecators[currentSlide].className = 'authors-slider__indicator';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'authors-slider__item showing';
    allIndecators[currentSlide].className = 'authors-slider__indicator selected';
}