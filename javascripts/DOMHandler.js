// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiment");
var veggiesChooser = document.getElementById("veggies");
var displayOrder = document.getElementById("final");
var meatToppingPrice = 0;
var breadToppingPrice = 0;
var veggieToppingPrice = 0;
var condimentsToppingPrice = 0;
var cheeseToppingPrice = 0;

displayOrder.innerHTML += " Your order: ";

/* 
 A <select> element broadcasts a change event, so you listen for it
 and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
 // Get the value chosen from the DOM
 selectedTopping = event.target.value;

 sandwichMaker.addMeat(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 sandwichMaker.addTopping(sandwichMaker.getMeatToppingPrice());
 displayOrder.innerHTML += selectedTopping + " " + sandwichMaker.getMeatToppingPrice() + "<br>";
});

breadChooser.addEventListener("change", function(event) {
 // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  sandwichMaker.addBread(selectedTopping);
  console.log(selectedTopping);


 sandwichMaker.addBread(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 sandwichMaker.addTopping(sandwichMaker.getBreadToppingPrice());
 displayOrder.innerHTML += selectedTopping + " " + sandwichMaker.getBreadToppingPrice() + "<br>";
});

cheeseChooser.addEventListener("change", function(event) {
 // Get the value chosen from the DOM
 selectedTopping = event.target.value;

 sandwichMaker.addCheese(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 sandwichMaker.addTopping(sandwichMaker.getCheeseToppingPrice());
 displayOrder.innerHTML += selectedTopping + " " + sandwichMaker.getCheeseToppingPrice() + "<br>";
});

veggiesChooser.addEventListener("change", function(event) {
 // Get the value chosen from the DOM
 selectedTopping = event.target.value;

 sandwichMaker.addVeggies(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 sandwichMaker.addTopping(sandwichMaker.getVeggiesToppingPrice());
 displayOrder.innerHTML += selectedTopping + " " + sandwichMaker.getVeggiesToppingPrice() + "<br>";
});

condimentsChooser.addEventListener("change", function(event) {
 // Get the value chosen from the DOM
 selectedTopping = event.target.value;

 sandwichMaker.addCondiments(selectedTopping);
 // Add the topping to the SandwichMaker to increase the total price
 sandwichMaker.addTopping(sandwichMaker.getCondimentsToppingPrice());
 displayOrder.innerHTML += selectedTopping + " " + sandwichMaker.getCondimentsToppingPrice() + "<br>";
});



var btn = document.getElementById("btnSpecial");
btn.addEventListener('click', function(event) {
 event.preventDefault();
 finalSandwichPrice = sandwichMaker.getTotalPrice();
 displayOrder.innerHTML += "final:" + finalSandwichPrice;

});