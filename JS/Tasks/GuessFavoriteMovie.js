// To create a program which ask to guess any movie as a input till that time they will not match or quit. 

let favMovie = "3Idiots";
let guessMovie = prompt("Guess my favorite movie.......🤔??");

while(favMovie != guessMovie) {
  if(guessMovie == "quit" ) {
    alert("You have quit........😑");
    break;
  }
  guessMovie =  prompt("You have suggest wrong.....😒\n Try Again.......🤔??");
}
if(favMovie == guessMovie) {  
  alert("Congrats you have Guessed correct movie........😍👌👌👌");
}
else {
  if(guessMovie == "quit")
  alert("You have Quit........😑");
}