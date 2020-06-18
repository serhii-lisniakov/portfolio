$(document).ready(function () {
    $(".slider").slick({
      dots: false,
      slidesToshow: 4,
      slidesToScroll: 1,
      speed: 1000,
      infinite: false,
      initialSlide: 1,
      variableWidth: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: false,
      arrows:false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            centerMode: true,
            slidesToshow: 1,
          },
        },
      ],
    });
  });