"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const display_Message = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  //When there is no input

  if (!guess) {
    display_Message("⛔No number !");

    //When player wins
    
  } else if (guess === secretnumber) {
    display_Message("🎉Correct Number !");
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretnumber) {
    if (score > 1) {
      display_Message(guess > secretnumber ? "📈To high!" : "📈To low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      display_Message("💥You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  display_Message("Start to guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = 0;
});
