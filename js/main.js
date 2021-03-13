$(".banner-slider").slick({
  // normal options...
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll:2,
  // the magic
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      infinite: true
    }
  }]
});