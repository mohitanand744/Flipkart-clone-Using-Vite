let showSliderImage = () => {
  let slideIndex = 0;
  let sliderImages = document.querySelectorAll(".slider img");
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");

  const showSlides = () => {
    if (slideIndex >= sliderImages.length) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = sliderImages.length - 1;
    }

    sliderImages.forEach((img) => {
      img.style.display = "none";
    });

    sliderImages[slideIndex].style.display = "block";
  };

  showSlides();

  prevBtn.onclick = () => {
    slideIndex--;
    showSlides();
  };
  nextBtn.onclick = () => {
    slideIndex++;
    showSlides();
  };

  setInterval(() => {
    slideIndex++;
    showSlides();
  }, 3000);
};

export default showSliderImage;
