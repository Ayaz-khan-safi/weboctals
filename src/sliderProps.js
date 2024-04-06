import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const partnersProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    480: { slidesPerView: 2, spaceBetween: 50 },
    768: { slidesPerView: 3, spaceBetween: 50 },
    1040: { slidesPerView: 4, spaceBetween: 50 },
    1200: { slidesPerView: 5, spaceBetween: 50 },
    1600: { slidesPerView: 5, spaceBetween: 50 },
    1920: { slidesPerView: 5, spaceBetween: 50 },
  },
};
export const blogProps = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".blog_left",
    prevEl: ".blog_right",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 1, spaceBetween: 50 },
    768: { slidesPerView: 1, spaceBetween: 50 },
    1040: { slidesPerView: 2, spaceBetween: 50 },
    1200: { slidesPerView: 2, spaceBetween: 50 },
    1600: { slidesPerView: 3, spaceBetween: 50 },
    1920: { slidesPerView: 3, spaceBetween: 50 },
  },
};
// effect: "fade",
export const testimonialsProps = {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".testimonial_next",
    prevEl: ".testimonial_prev",
  },
};
