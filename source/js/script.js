//slider

const slider = () => {
  const prevBtn = document.querySelector(".slider_button--left"),
    nextBtn = document.querySelector(".slider_button--right");

  prevBtn.addEventListener("click", previousSlide);
  nextBtn.addEventListener("click", nextSlide);

  let slideIndex = 1;
  showSlides(slideIndex);

  function nextSlide() {
    showSlides((slideIndex += 1));
  }

  function previousSlide() {
    showSlides((slideIndex -= 1));
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slider_item");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let slide of slides) {
      slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
};
slider();
