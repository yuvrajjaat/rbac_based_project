const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const bullets = document.querySelectorAll('.bullet');
  const images = document.querySelectorAll('.image');
  let currentIndex = 0;

  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      images[currentIndex].classList.remove('show');
      bullets[currentIndex].classList.remove('active');
      currentIndex = index;
      images[currentIndex].classList.add('show');
      bullets[currentIndex].classList.add('active');
    });
  });

  setInterval(() => {
    images[currentIndex].classList.remove('show');
    bullets[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('show');
    bullets[currentIndex].classList.add('active');
  }, 3000);

  const toggleButtons = document.querySelectorAll('.toggle');
  const signInForm = document.querySelector('.sign-in-form');
  const signUpForm = document.querySelector('.sign-up-form');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      signInForm.classList.toggle('hidden');
      signUpForm.classList.toggle('hidden');
    });
  });
});



toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  }); 
});


