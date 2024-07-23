import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const caseSlider = document.querySelector('.case-slider');
const careersSlider = document.querySelector('.careers-speed-slider');
const benefitsSlider = document.querySelector('.benefits-slider');

const swiperCase = new Swiper(caseSlider, {
  slidesPerView: '1',
  loop: true,

  navigation: {
    nextEl: '.case-nav-btn',
  },
});

const swiperBenefits = new Swiper(benefitsSlider, {
  slidesPerView: '1',
  loop: true,

  navigation: {
    nextEl: '.benefits-nav-btn',
  },
});

const careersSpeed = new Swiper(careersSlider, {
  slidesPerView: '1',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // navigation: {
  //   nextEl: '.case-nav-btn',
  // },
});
