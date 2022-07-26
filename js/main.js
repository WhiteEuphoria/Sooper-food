
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  speed: 800,
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  keyboard: {
    enabled : true
  },
  // autoplay: {
  //   delay: 3000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: true
  // }
});

const burgerBtn = document.querySelector(".burger")

burgerBtn.addEventListener("click", function (){
    document.querySelector(".burger").classList.toggle("burger--active");
    document.querySelector(".nav-menu").classList.toggle("nav-menu--active");
    document.querySelector(".wrap").classList.toggle("button--unvis");
});