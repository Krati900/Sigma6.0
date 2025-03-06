let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ['yellow', 'red', 'purple', 'green'];

let h2 = document.querySelector("p");

let highestScoreBtn = document.getElementById("highest-score-btn");
let highestScore = localStorage.getItem('highestScore') || 0;
highestScoreBtn.innerHTML = `Highest Score: ${highestScore}`;

document.addEventListener("keypress", function() {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function() {
    btn.classList.remove("userFlash");
  }, 250);
}function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4); 
  console.log(randIdx);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);

  let delay = 0;
  gameSeq.forEach((color, index) => {
    let randBtn = document.querySelector(`.${color}`);
    setTimeout(() => {
      gameFlash(randBtn);
    }, delay);
    delay += 600;
  });
}

function checkBtnSeq(indx) {
  if (userSeq[indx] === gameSeq[indx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over..! Your Score Was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    if (level > highestScore) {
      highestScore = level;
      localStorage.setItem('highestScore', highestScore);
      highestScoreBtn.innerHTML = `Highest Score: ${highestScore}`;  
    }

    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkBtnSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
