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

