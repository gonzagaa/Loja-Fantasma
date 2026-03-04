
const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
  limitProgress: 3,
  prev: {
    shadow: false,
    translate: ["-120%", 0, -200],
    scale: 0.9,
    opacity: 0.6,
  },
  next: {
    translate: ["120%", 0, -200],
    scale: 0.9,
    opacity: 0.6,
  },
},
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

if (larguraDaTela < 800) {
    var swiper4 = new Swiper(".mySwiper4", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
  limitProgress: 3,
  prev: {
    shadow: false,
    translate: ["-120%", 0, -200],
    scale: 0.9,
    opacity: 0.6,
  },
  next: {
    translate: ["120%", 0, -200],
    scale: 0.9,
    opacity: 0.6,
  },
},
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}





