import Swiper, { Pagination } from 'swiper';

const sliders = document.querySelectorAll('.swiper');

sliders.forEach(slider => {
  let swiper;
  const mobileSlider = () => {

    if (window.innerWidth <= 768 && slider.dataset.mobile === 'false') {
      swiper = new Swiper(slider, {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      slider.dataset.mobile = 'true'
    }
    if (window.innerWidth > 768) {
      slider.dataset.mobile = 'false';

      if (slider.classList.contains('swiper-initialized')) {
        swiper.destroy();
      }
    }
  }
  mobileSlider()
  
  window.addEventListener('resize', () => {
    mobileSlider()
  })
});

