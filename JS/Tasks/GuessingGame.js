// Ask the maximum number, Guess any no between 1 to 10 if generated random num is equals to guess num than congratulations otherwise guess again till you guess or quit the game also introduce the hints that your guessed Number is larger or small. 

let maxNum = prompt("Guessing game is going to be start ..😁😁😁😁😁\n \nEnter any maximum number till that number you want to guess");
let genNum = Math.floor(Math.random() * maxNum) + 1;
let guessNum = parseInt(prompt(`Guess any number from 1 to ${maxNum} .. 🤔🤔`));

while (true) {
  if((genNum != guessNum) && guessNum != "Quit") {
    if(guessNum > genNum) {
      guessNum = prompt("Oops your number is too large .....😒, Again Guess 🤔 any number or Quit The game");
    }
    else {
      guessNum = prompt("Oops your number is too small .....😒, Again Guess 🤔 any number or Quit The game");
    }
  }
  else if(guessNum == "Quit") {
    alert("You have Quit the game.....Thanks for participate👍");
    break;
  }
  else if(genNum == guessNum){
    alert(`Congrates You have guessed correct...😍😍, number was ${genNum} 🥳🥳🥳🥳`);
    break;
  }
} 