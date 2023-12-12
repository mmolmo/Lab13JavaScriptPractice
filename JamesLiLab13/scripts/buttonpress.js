function init() {
  //a variable that gets the button on line 11
  var button = document.getElementById('button');
  //creates a variable name gridDiv by getting the div with the class of 'grid'
  var gridDiv = document.querySelector('.grid');
    //basically hides the display of the grid
    gridDiv.style.opacity = 0;
    gridDiv.style.maxHeight = "0px";
  var gridArray = document.getElementsByClassName("grid-item");
    for (let i = 0; i<gridArray.length;i++){
      gridArray[i].style.opacity = 0;
      gridArray[i].style.maxHeight = "0px";
    }
  /*when the button is clicked, run the function that is unnamed. 
  Inside the function, run the 'trigger' function first, wait 1500 milliseconds, then run the function 'displayGrid'*/
  button.onclick = function() {
    trigger();
    displayGrid();
  }
  button.addEventListener("blur", hideGrid, false);
}
//function named trigger that changes visual style elements of the paragraph class when the button is clicked
function trigger(){
  //manipulates the size, font, weight, color, when click while also providing an ease in effect
  var buttontrigger = document.getElementById('buttontrigger');
  buttontrigger.style.color = 'brown';
  buttontrigger.style.fontSize = '32px';
  buttontrigger.style.fontWeight = 'bold';
  buttontrigger.style.transition = 'all 1s ease-in-out';
}
//function displayGrid sets the display of the grid from none to block when the button is clicked
var gridDiv = "";
var gridArray = document.getElementsByClassName("grid-item");

function displayGrid(){
  //calls the gridDiv class as defined earlier.
  gridDiv= document.querySelector('.grid');
  //sets the opacity of the grid to 1 over the course of 100 milliseconds
  gridDiv.style.maxHeight = "1000px";
  setTimeout(function() {
    gridDiv.style.opacity = 1;
  }, 300);
  //this is just to ease the animation and set the display to block.
  gridDiv.style.transition = 'all 1s ease-in-out';
   
  var gridArray = document.getElementsByClassName("grid-item");
  var gridArrayAsArray = Array.from(gridArray); 
  gridArrayAsArray.forEach(function (el, index) {
    setTimeout(function () {
    console.log(el);
    el.style.opacity = 1;
    el.style.maxHeight = "100px";
    el.style.transition = 'all 1s ease-in-out';
    }, index * 100);
  });
}
function hideGrid(){
  var gridArray = document.getElementsByClassName("grid-item");
  var gridArrayAsArray = Array.from(gridArray); 
  //iterate each backwards
  let animationFinished = new Promise.resolve();

  var promise = Promise.resolve();
array.forEach(function (el) {
  promise = promise.then(function () {
    console.log(el);
    return new Promise(function (resolve) {
      setTimeout(resolve, interval);
    });
  });
});

promise.then(function () {
  console.log('Loop finished.');
});

async function gridItemAnimation(){ 
  await promiseAction(item);
  for (let i = gridArrayAsArray.length - 1; i >= 0; i--) {
    setTimeout(function () {
      console.log(gridArrayAsArray[i]);
      gridArrayAsArray[i].style.opacity = 0;
      gridArrayAsArray[i].style.maxHeight = "0px";
      gridArrayAsArray[i].style.transition = 'all 1s ease-in-out';
    }, (gridArrayAsArray.length - 1 - i) * 500);
    animationFinished();
  }};
  
  gridItemAnimation();

   //calls the gridDiv class as defined earlier.
  animationFinished.then(function(){
    gridDiv= document.querySelector('.grid');
    //sets the opacity of the grid to 1 over the course of 100 milliseconds
    setTimeout(function() {
      gridDiv.style.opacity = 0; 
      //this is just to ease the animation and set the display
      gridDiv.style.maxHeight = "0px";
      gridDiv.style.transition = 'all 1s ease-in-out';
    }, 300);}
  );
   
  /*
  gridArrayAsArray.forEach(function (el, index) {
    setTimeout(function () {
    console.log(el);
    el.style.opacity = 0;
    el.style.maxHeight = "0px";
    el.style.transition = 'all 1s ease-in-out';
    }, index * 100);
  });*/

  /*
  for (let i = 0; i<gridArray.length;i++){
    gridArray[i].style.opacity = 0;
    gridArray[i].style.maxHeight = "0px";
    gridArray[i].style.transition = 'all 1s ease-in-out';
  }*/
  
}
//a command that says when the window loads, run the function 'start'
window.addEventListener("load", init, false);