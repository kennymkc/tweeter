$(document).ready(function () {
  $('#tweet-text').on('input', function (e) {
   
    const remainingCount = 140 - $(this).val().length;
    //Traverse to counter using DOM
    const counter = $(this).siblings('.tweet-button-count').children('.counter');
   
    counter.text(remainingCount);

    //counter turns red if below 0
    if (remainingCount < 0) {
      counter.addClass('over-characters');
    } else {
      counter.removeClass('over-characters');
    }

  })
});
