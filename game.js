var score = 1; // Create a variable to store the score in

var title = new Title('The Forest'); // Create a title element
var button = new Button('Gather Wood', btnPress);   // Create a button element
var hidden = new Button('Wood');
hidden.hide();
var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 100000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 1) {
    makebtn();
  }
  if(score < 5) {
    hidden.hide(500);
  }
}

function makebtn() {
  var button = new Button('Wood')
}
