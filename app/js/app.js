$(document).ready(function () {
  function showSuccessModal() {
    $(".backdrop").addClass("show");
    $(".success-popup").addClass("show");
    $("body").addClass("scroll-off");
  }

  function hideSuccessModal() {
    $(".backdrop").removeClass("show");
    $(".success-popup").removeClass("show");
    $("body").removeClass("scroll-off");
  }

  function openMenu() {
    $(".lines").addClass("opened");
    $(".nav-ul").addClass("opened");
    $(".backdrop").addClass("show");
  }

  function closeMenu() {
    $(".lines").removeClass("opened");
    $(".nav-ul").removeClass("opened");
    $(".backdrop").removeClass("show");
  }

  // show success popup after ordering
  $(".submit").click(function () {
    showSuccessModal();
    setTimeout(function () {
      hideSuccessModal();
    }, 3000);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $(".header").addClass("shadow bg-blue");
      $(".header .logo").addClass("show");
    } else {
      $(".header").removeClass("shadow bg-blue");
      $(".header .logo").removeClass("show");
    }
  });

  // Open/close menu
  $(".burger").click(function () {
    if ($(".nav-ul").hasClass("opened")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  let headerHeight = $(".header").outerHeight();

  // Animate to hero
  $(".main-logo").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // Animate to hero
  $(".main-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    closeMenu();
  });

  // Animate to suprise section
  $(".order-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".surprise").offset().top - headerHeight,
      },
      1000
    );
    closeMenu();
  });

  // Animate to order section
  $(".contact-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".order").offset().top - headerHeight,
      },
      1000
    );
    closeMenu();
  });

  // Order slider
  $(".owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    navElement: "div",
    items: 1,
    margin: 0,
    autoplay: false,
  });

  $(document).mouseup(function (e) {
    var popup = $(".nav-ul");
    if (
      !$(".burger").is(e.target) &&
      !popup.is(e.target) &&
      popup.has(e.target).length == 0
    ) {
      closeMenu();
      hideSuccessModal();
    }
  });


  function showPopup() {
    $(".offer").addClass("show");
  }

  function closePopup() {
    $(".offer").removeClass("show");
  }

  $(".button").click(function () {
    showPopup();
  });

  $(".offer-button").click(function () {
    closePopup();
  });
  
});
