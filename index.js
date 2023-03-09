import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: ".reviews__next",
    prevEl: ".reviews__prev",
    disabledClass: 'disabled',
  },
  spaceBetween: 20,
  direction: "vertical",
});
