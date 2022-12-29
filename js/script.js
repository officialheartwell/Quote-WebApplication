const arrayOfQuote = [
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "When you are very prepared and equipped the justice system of god will create space for you.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "Can someone look at your life and write more sermons from your life than your preaching",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote: "There is a level of WISDOM only pain can give.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote: "VIRTUE is the measure of your closeness to the character of Christ",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "Time And Chance happens to everyone, you must learn to prepare before the opportunity comes.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "No matter what you loose, if you have time you did not loose and no matter what you have, if you loose tim you have lost.",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "Whenever you are starting out an Assignment, begin with people who are ready and willing to be trained. stop running around 'Already made people'.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      " If you Attempt to Change Your Life Without first Changing your mindset, your mindset will compel Behaviors that will force your life to Return Back to Default.",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "You are supposed to carry every possibilities that is resident in the life of the person you are submitting to.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "When God wants to bless you, He doesn't gives you Money, Cars, Or Houses. He gives you what Monet can not buy! ",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "Never assume you are a master of a new level. As soon as you realise you are growing into another level, pay the prize to site and listen.",
  },

  {
    author: "~ Apostle Joshua Selman ~",
    quote: "Indecision is a Decision to fail",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "A proof that you are growing is that love is your love is growing. you are able to love men genuinely when you love God genuinely",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "Its takes a relationship between you and the HolyGhost to birth ideas that changes the world, Influence over a Generation and have Dominion  ",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "if you are not praying, it is a proof that you are not growing spiritually. Consistent prayers and spending time in worhip are proof that you are growing .",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "The church is not a Nuisance to civilization, it remains a solution center to humanity.",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "In this Kingdom, You are not a witness by English, You are a witness by POWER.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote: "CARELESSNESS comes when proccess is not known",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "Being valuable is not enough. Your value must be developed, refined, and served with excellence. You must pay the prize if you must rise in this kingdom",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "'COMPETENCE' and 'EXCELLENCE' are magnets that attract People, Resouces and Opportunties into your life.",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "Not everybody has the capacity to endorse another, it takes track record. If everyone speaking well of you are poor people, you have a problem!",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "The power to make wealth is an engracing by the holy spirit upon an individual or an organisation that aattracts people, opportunities and Resources. ",
  },
  {
    author: "~ Apostle Jonathan Shekwonya ~",
    quote:
      "We live in a Knowledge driven world, people look for you because of what you know. know body will know you until you know what they don't know",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "IT IS YOUR RESPONSIBILITY TO INVENT THE SKILL THAT WILL KEEP YOU PRAYERFUL. Don't assume you will be prayerful just because you are anointed. IT IS A LIE FROM THE PIT OF HELL.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "Is on the strength of what you KNOW that you REIGN in life. 'KNOWLEDGE keeps you incharge'.",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "The unit of DESTINY is TIME. whatever affect your TIME affects your Destiny. WISDOM is your ability to have DOMINION over Time",
  },
  {
    author: "~ Apostle Joshua Selman ~",
    quote:
      "Results in the Kingdom are not accidental. You must submit yourself to strategic learning by becoming a spiritual archeologist for areas of ignorance",
  },
];

function selectionOfArray(arraylength) {
  return Math.floor(Math.random() * arraylength);
}

const button = document.querySelector(".btn");
function generateQuote() {
  const button = document.querySelector(".btn");
  button.classList.add("loading");
  button.innerText = "Loading Quote...";

  let NumberQuote = selectionOfArray(arrayOfQuote.length);
  document.getElementById("quote").innerHTML = arrayOfQuote[NumberQuote].quote;
  document.getElementById("author").innerHTML =
    arrayOfQuote[NumberQuote].author;
  button.innerText = "New Quote";
  button.classList.remove("loading");
}

button.addEventListener("click", generateQuote);

let sound = document.querySelector(".sound");

sound.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${document.getElementById("quote").innerHTML}`
  );
  speechSynthesis.speak(utterance);
});
