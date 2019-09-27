var score = 0; // Create a variable to store the score in

var title = new Title('The Forest'); // Create a title element
var button = new Button('Gather Wood', btnPress);   // Create a button element
var hidden = new Button('Wood');
var title = new Text('Gather fifty pieces of wood to build a hut')//Create a text element
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 10000000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 0) {
    makebtn();
  }
}

function makebtn() {
  var button = new Button('Wood')
}
