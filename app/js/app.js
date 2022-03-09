$(document).ready(function () {
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
});
