$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: `<button type="button" class="slick-prev btn-slide"><span class="icon-next"></span></button>`,
  nextArrow: `<button type="button" class="slick-next btn-slide"><span class="icon-next i-rot"></span></button>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
