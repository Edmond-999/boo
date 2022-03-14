$(document).ready(function () {
  $(".submit").click(function () {
    $(".modal-backdrop").addClass("show");
    setTimeout(function () {
      $(".modal-backdrop").removeClass("show");
    }, 3000);
  });

  $(".lines").click(function () {
    if ($(".lines").hasClass("opened")) {
      $(".lines").removeClass("opened");
    } else {
      $(".lines").addClass("opened");
    }
    if ($(".nav-ul").hasClass("mobile")) {
      $(".nav-ul").removeClass("mobile");
    } else {
      $(".nav-ul").addClass("mobile");
    }
  });

  $(".owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    navElement: "div",
    items: 1,
    margin: 0,
    autoplay: false,
  });
});
