let genRandom;

let form = document.querySelector("form");

let button = document.querySelector("#submit");

let guessedNo;

let prevNo = document.querySelector(".prev-val");

let remCounts = document.querySelector("#remaining-count");

let additionalData = document.querySelector(".addition-data");

let prevGuessedArr = [];

let paraTag = document.createElement("p");
paraTag.classList.add("p-tag");
let addPara = additionalData.appendChild(paraTag);

let startGame = () => {
  genRandom = Math.floor(Math.random() * 100) + 1; 
  prevGuessedArr = []; 
  remCounts.innerHTML = 10; 
  prevNo.innerHTML = `Previous Guessed Value: []`; 
  // addPara.innerHTML = "Game is going to start"; 
  document.querySelector(".guess-no").value = '';
  
  button.disabled = false; 
  button.innerHTML = "Submit";
  button.style.backgroundColor = "chartreuse";

  let existingStartButton = document.querySelector(".start-button");
  let existingQuitButton = document.querySelector(".quit-button");
  if (existingStartButton) existingStartButton.style.display = "none";
  if (existingQuitButton) existingQuitButton.style.display = "none";

  submitFunction(); 
};

let submitFunction = () => {
  button.addEventListener("click", handleSubmit); 
};

let handleSubmit = (e) => {
  e.preventDefault();
  guessedNo = parseInt(document.querySelector(".guess-no").value);
  checkValidation(guessedNo);
};

let checkValidation = (guessedNo) => {
  if (isNaN(guessedNo)) {
    addPara.innerHTML = "Please enter a valid number";
  } else if (guessedNo < 1) {
    addPara.innerHTML = "Please enter a value greater than 0";
  } else if (guessedNo > 100) {
    addPara.innerHTML = "Please enter a value less than 100";
  } else {
    correctNum(guessedNo); 
  }
};

let correctNum = (guessedNo) => {
  if (guessedNo > genRandom) {
    addPara.innerHTML = "Your number is too high";
  } else if (guessedNo < genRandom) {
    addPara.innerHTML = "Your number is too low";
  } else {
    addPara.innerHTML = "You have guessed the correct number!";
    showGameOptions(); 
  }

  prevGuessedArr.push(guessedNo); 
  prevNo.innerHTML = `Previous Guessed Value: [${prevGuessedArr.join(", ")}]`;

  let count = parseInt(remCounts.innerHTML) - 1;
  remCounts.innerHTML = `${count}`;

  if (count === 0) {
    stopGame(); 
  }
};

let showGameOptions = () => {
  let existingStartButton = document.querySelector(".start-button");
  let existingQuitButton = document.querySelector(".quit-button");
  if (existingStartButton) existingStartButton.remove();
  if (existingQuitButton) existingQuitButton.remove();

  button.disabled = true;

  let startButton = document.createElement("button");
  startButton.innerHTML = "Start Again";
  startButton.classList.add("start-button");

  let quitButton = document.createElement("button");
  quitButton.innerHTML = "Quit";
  quitButton.classList.add("quit-button");

  startButton.style.backgroundColor = "green";
  quitButton.style.backgroundColor = "green";
  startButton.style.padding = "1rem";
  quitButton.style.padding = "1rem";
  startButton.style.color = "white";
  quitButton.style.color = "white";
  startButton.style.border = "none";
  quitButton.style.border = "none";
  startButton.style.fontSize = "1rem";
  quitButton.style.fontSize = "1rem";
  startButton.style.cursor = "pointer";
  quitButton.style.cursor = "pointer";
  startButton.style.margin = "0.5rem";
  quitButton.style.margin = "0.5rem";
  startButton.style.borderRadius = "5px";
  quitButton.style.borderRadius = "5px";
  startButton.style.transition = "background-color 0.3s ease";
  quitButton.style.transition = "background-color 0.3s ease";

  startButton.onmouseover = () => {
    startButton.style.backgroundColor = "darkgreen";
  };
  quitButton.onmouseover = () => {
    quitButton.style.backgroundColor = "darkgreen";
  };

  startButton.onmouseout = () => {
    startButton.style.backgroundColor = "green";
  };
  quitButton.onmouseout = () => {
    quitButton.style.backgroundColor = "green";
  };

  additionalData.appendChild(startButton);
  additionalData.appendChild(quitButton);

  startButton.addEventListener("click", function () {
    addPara.innerHTML = "Game is Going to start!";
    startGame(); 
  });

  quitButton.addEventListener("click", function () {
    addPara.innerHTML = "Game is quit";
    startGame(); 
  });
};

let resetGameState = () => {
  prevGuessedArr = [];
  prevNo.innerHTML = `Previous Guessed Value: []`;
  remCounts.innerHTML = 10;
  addPara.innerHTML = "Game is going to start";
  document.querySelector(".guess-no").value = '';
};

let stopGame = () => {
  button.disabled = true;
  button.innerHTML = "Game is Over";
  button.style.backgroundColor = "#808080";

  let startButton = document.createElement("button");
  startButton.innerHTML = "Start Game";

  form.appendChild(startButton);
  startButton.classList.add("start-button");

  startButton.addEventListener("click", function (e) {
    e.preventDefault();
    startGame(); 
  });
};

window.onload = () => {
  document.querySelector(".guess-no").value = ''; 
};

submitFunction();