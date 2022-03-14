$(document).ready(function () {
  $(".submit").click(function () {
    $(".modal-backdrop").addClass("show");
    setTimeout(function () {
      $(".modal-backdrop").removeClass("show");
    }, 3000);
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
