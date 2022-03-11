$(document).ready(function () {
  $(".submit").click(function() {
    $(".modal-backdrop").addClass('show')
    setTimeout(function() {
      $(".modal-backdrop").removeClass('show')
    }, 3000)
  })
})