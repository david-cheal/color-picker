 //When the window loads execute a function
 window.onload = function() {
     //Wait for any change to sliders and update the color of the background
     $("input").change(function() {
         UpdateColor();
     })
 }

 function UpdateColor() {

     //Gets the sliders
     var sliderR = document.getElementById("rangeRed");
     var sliderG = document.getElementById("rangeGreen");
     var sliderB = document.getElementById("rangeBlue");

     //Gets the background 
     var background = document.getElementById("background");

     //Sets the color to be equal to each value from sliders
     var color = "rgb(" + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ")";
     background.style.backgroundColor = color;

 }