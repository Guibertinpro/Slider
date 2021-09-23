const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function() {
  counter++;
  carousel();
});
prevBtn.addEventListener('click', function() {
  counter--;
  carousel();
});

function carousel() {
  // retour au début
  if(counter === slides.length) {
    counter = 0;
  };
  // retour à la fin
  if(counter < 0) {
    counter = slides.length - 1;
  };
  // changement de slide
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};