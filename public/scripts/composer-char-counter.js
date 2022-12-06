$(document).ready(function () {
  // when text is inputted (keyup) 
  $('#tweet-text').on('input', function (e) {
    console.log($(this).val())
  })
});
