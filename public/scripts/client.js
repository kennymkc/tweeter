/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//takes in array of tweet objects & appends to #tweet-container
const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    const singleTweet = createTweetElement(tweet);
    $('#tweet-container').append(singleTweet);
  }
}

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
  <p>${tweets.created_at}</p>
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

$(document).ready(function () {
  renderTweets(data);
});
