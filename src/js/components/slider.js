import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const caseSlider = document.querySelector('.case-slider')

const swiperCase = new Swiper(caseSlider, {
  slidesPerView: '1',
  loop: true,

  navigation: {
    nextEl: '.case-nav-btn',
  },
})
