function start() {
  //a variable that gets the button on line 11
  var button = document.getElementById('button');
  //creates a variable name gridDiv by getting the div with the class of 'grid'
  var gridDiv = document.querySelector('.grid');
    //basically hides the display of the grid
    gridDiv.style.opacity = 0;
    gridDiv.style.display = 'none';
  /*when the button is clicked, run the function that is unnamed. 
  Inside the function, run the 'trigger' function first, wait 1500 milliseconds, then run the function 'displayGrid'*/
  button.onclick = function() {
    trigger();
    setTimeout(displayGrid, 1500);
  }
}
//function named trigger that changes visual style elements of the paragraph class when the button is clicked
function trigger(){
  //manipulates the size, font, weight, color, when click while also providing an ease in effect
  document.getElementById('buttontrigger').style.color = 'brown';
  document.getElementById('buttontrigger').style.fontSize = '32px';
  document.getElementById('buttontrigger').style.fontWeight = 'bold';
  document.getElementById('buttontrigger').style.transition = 'all 1s ease-in-out';
}
//function displayGrid sets the display of the grid from none to block when the button is clicked
function displayGrid(){
  //calls the gridDiv class as defined earlier.
  var gridDiv = document.querySelector('.grid');
  //sets the opacity of the grid to 1 over the course of 100 milliseconds
  setTimeout(function() {
    gridDiv.style.opacity = 1;
  }, 100);
  //this is just to ease the animation and set the display to block.
  document.querySelector('.grid').style.transition = 'all 1s ease-in-out';
  gridDiv.style.display = 'block';
}
//a command that says when the window loads, run the function 'start'
    window.onload = start;