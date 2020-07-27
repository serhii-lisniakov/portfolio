$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#goUpBtn").fadeIn();
    } else {
      $("#goUpBtn").fadeOut();
    }
  });
  $("#goUpBtn").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 700);
  });
});

$(function () {
  $("#goDownBtn").click(function () {
    $("body,html").animate({ scrollTop: $(document).height() + $(window).height()}, 1000);
  });
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    centerPadding: "0px",
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