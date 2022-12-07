/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
}

const createTweetElement = function (data) {
  return `
  <article class="tweet">
  <header>
  <div class="user">
  <img src="${data.user.avatars}">
  ${data.user.name}
  </div>
  ${data.user.handle}
  </header>
  <p class="tweet-content">${data.content.text}</p>
  <footer>
  <p>${data.created_at}</p>
  <div class="social-buttons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
  </article>
  `;
};

$(document).ready(function () {
  const $tweet = createTweetElement(tweetData);
  $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
