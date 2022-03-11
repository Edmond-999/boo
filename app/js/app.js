$(document).ready(function () {
    $(".submit").click(function () {
      if ($(".accept").hasClass("submited")) {
        $(".accept").removeClass("submited");
      } else {
        $(".accept").addClass("submited");
      }
    });
  });