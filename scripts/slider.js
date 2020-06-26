$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToshow: 4,
    slidesToScroll: 1,
    speed: 1000,
    // infinite: false,
    initialSlide: 2,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          infinite: false,
          arrows: false,
        },
      },
    ],
  });
});
