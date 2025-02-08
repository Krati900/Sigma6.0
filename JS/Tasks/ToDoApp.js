// Create To Do App 

let input = prompt("Enter any Tasks which you want to perform.....✍️✍️ \n ADD, LIST, DELETE, QUIT");
let tasks = [];

while(true) {
  switch(input) {
    case "ADD": 
    let addTask = prompt("Enter any task which you want to add:...... + ")
    tasks.push(addTask);
    alert("Task Added....👍");
    break;

    case "LIST":  
    console.log("This is the list....")
    console.log("------------------------------------");
    if(tasks.length>0) {
      for(let i=0; i<tasks.length; i++) {

        console.log(i, tasks[i]);
      }
    }
    else {
      console.log("OOPS..😑, No Tasks is Here");
    }
   
    break;

    case "DELETE": 
    let index = prompt("Write the index to delete the value");
    tasks.splice(index, 1);
    alert("Task Deleted");
    break;

    case "QUIT":
    alert("You have Quit....");
    break;  

    default: alert("I have no any operation according to your requirements.");
    break;
  } 
  if(input === "QUIT") {
    break;
  }
  input = prompt("Enter any Tasks which you want to perform.....✍️✍️ \n ADD, LIST, DELETE, QUIT"); 
}





