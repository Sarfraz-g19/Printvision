let currentIndex = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const dots = document.getElementsByClassName("dot");

  if (index >= 3) currentIndex = 0;
  else if (index < 0) currentIndex = 2;
  else currentIndex = index;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[currentIndex].classList.add("active");
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index);
}

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);
