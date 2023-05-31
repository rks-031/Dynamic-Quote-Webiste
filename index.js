const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newBtn = document.getElementById("newQBtn");
const tweetMe = document.getElementById("tweetMe");

let realData = "";
let quotesData = "";

const tweetNow = () => {
  // To assign quotes text & author we used query parameters after 'tweet?text=' ....
  // For rest stuff we use url encoder available on net to encode url with hashtag for tweeting..
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}%0D%0A%0D%0A-By+${quotesData.author}+%E2%9C%A8+%0D%0A%0D%0A%23quote+%23life+%23quotes+%23InspirationalQuotes+%23quoteoftheday+%23quotestoliveby+`;
  window.open(tweetPost);
};

const getNewQuotes = () => {
  let rnum = Math.floor(Math.random() * realData.length);
  quotesData = realData[rnum];
  quotes.innerText = `${quotesData.text}`;
  console.log(rnum, quotesData.author);

  //Check if author value is not present or is null then change value to Unknown
  if (quotesData.author == null) {
    author.innerText = "Unknown";
  } else {
    author.innerText = `${quotesData.author}`;
  }
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {}
};

tweetMe.addEventListener("click", tweetNow);
newBtn.addEventListener("click", getNewQuotes);
getQuotes();
