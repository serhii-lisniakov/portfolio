$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToshow: 3,
    slidesToScroll: 1,
    speed: 400,
    // infinite: false,
    initialSlide: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          infinite: false,
          arrows: false,
          centerMode: true,
        },
      },
    ],
  });
});
