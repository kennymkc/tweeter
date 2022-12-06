$(document).ready(function () {
  $('#tweet-text').on('input', function (e) {
    console.log(140 - $(this).val().length);
  })
});
