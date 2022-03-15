$(document).ready(function () {
  $(".submit").click(function () {
    $(".modal-backdrop").addClass("show");
    setTimeout(function () {
      $(".modal-backdrop").removeClass("show");
    }, 3000);
  });

  function openMenu() {
    $(".lines").addClass("opened");
    $(".nav-ul").addClass("opened");
    $('.menu-backdrop').addClass('show')
  }

  function closeMenu() {
    $(".lines").removeClass("opened");
    $(".nav-ul").removeClass("opened");
    $('.menu-backdrop').removeClass('show')
  }

  $(".burger").click(function () {
    if ($('.nav-ul').hasClass('opened')) {
      closeMenu()
    } else {
      openMenu()
    }
  });

  $(".order-link").click(function() {
    $('html, body').animate({
        scrollTop: $(".surprise").offset().top
    }, 1000);
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
