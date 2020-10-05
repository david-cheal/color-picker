 var color = "";
 var storage = window.localStorage;

 //When the window loads execute a function
 window.onload = function() {

     //Loads the last color generated
     color = storage.getItem('color');
     background.style.backgroundColor = color;

     //Wait for any change to sliders and update the color of the background
     $("input").change(function() {
         UpdateColor();
     });
 }

 function UpdateColor() {

     //Gets the sliders
     var sliderR = document.getElementById("rangeRed");
     var sliderG = document.getElementById("rangeGreen");
     var sliderB = document.getElementById("rangeBlue");

     var colorText = document.getElementById("colorText");

     var valueR = document.getElementById("valueRed");
     var valueG = document.getElementById("valueGreen");
     var valueB = document.getElementById("valueBlue");

     valueR.innerHTML = sliderR.value;
     valueG.innerHTML = sliderG.value;
     valueB.innerHTML = sliderB.value;

     //Gets the background 
     var background = document.getElementById("background");

     //Sets the color to be equal to each value from sliders
     color = "rgb(" + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ")";
     colorText.innerHTML = color;
     background.style.backgroundColor = color;

     //Stores the generated color incase of refresh
     storage.setItem('color', color);

 }