// JavaScript for the slider functionality
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slider = document.getElementById('slider');

let slideIndex = 0;

showSlide(slideIndex);

prevBtn.addEventListener('click', () => {
showSlide(slideIndex -= 1);
});

nextBtn.addEventListener('click', () => {
showSlide(slideIndex += 1);
});

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');  

  if (n >= slides.length) {
    slideIndex = 0;
}

if (n < 0) {
    slideIndex = slides.length - 1;
}

for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('animate__fadeIn');
}

slides[slideIndex].style.display = 'flex';
slides[slideIndex].classList.add('animate__fadeIn');
}

setInterval(() => {
  showSlide(slideIndex += 1);
  }, 5000);
