// Selected complete box by id 
let box = document.getElementById("bg-box");
console.log(box);

// Selected body of which you want to change the bg-color.
let body = document.querySelector("body");
console.log(body);

// Selected all buttons under the box
let buttons = box.querySelectorAll("button");
console.log(buttons);

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    console.dir(e.target.id);
    let buttonColor = window.getComputedStyle(e.target).backgroundColor;
    console.log(buttonColor);
    body.style.backgroundColor = buttonColor; 
  })
})



