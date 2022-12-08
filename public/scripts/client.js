/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//takes in tweet object returning a tweet<article> element
const createTweetElement = function (tweets) {
  let $tweet = `
  <article class="tweet">
    <header>
     <div class="user">
      <img src="${tweets.user.avatars}">
      ${tweets.user.name}
     </div>
      ${tweets.user.handle}
    </header>
    <p class="tweet-content">${tweets.content.text}</p>
    <footer>
      <p>${timeago.format(tweets.created_at)}</p>
        <div class="social-buttons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
    </footer>
  </article>
  `;
  return $tweet;
};

//takes in array of tweet objects & appends to #tweet-container
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    const singleTweet = createTweetElement(tweet);
    $('#tweet-container').prepend(singleTweet);
  }
};

const loadTweets = function () {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    dataType: 'JSON'
  })
    .then((tweet) => renderTweets(tweet))
    .catch((err) => { console.log(err) })
};

loadTweets();

$(document).ready(function () {

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    console.log('You clicked the TWEET button!');

    if (!$('#tweet-text').val()) {
      return alert('You cannot tweet nothing!');
    }

    if ($('#tweet-text').val().length > 140) {
      return alert('Tweet exceeds the maximum count!');
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    })
      //make get request immediately after post so page does not have to refresh
      .then(() => {
        $.ajax({
          method: 'GET',
          url: '/tweets',
          dataType: 'JSON'
        })
          /*use renderTweets to get last obj in array and wrapped it in [] b/c renderTweets takes in an array before posting */
          .then((tweet) => renderTweets([tweet[tweet.length - 1]]))
          .catch((err) => { console.log(err) })
        //clear tweet textbox
        $('#tweet-text').val('');
        //resets counter
        $('.counter').text(140);
      })
      .catch((err) => {
        console.log(err);
    })
      
  });


});
