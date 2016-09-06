// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var cheese = [];
  // Private variable to store the different Cheese prices
  var cheesePrices = {"swiss": 0.20,
  					          "american": 0.30,
  					          "colby": 0.40,
  					          "cheddar": 0.50
  					         };

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    cheese.push(Cheese);
  };

 maker.removeCheese =function(cheese){
 	var index = cheese.indexOf(cheese);
 		if(index !== -1){
 			cheese.splice(index, 1);
 		}
 } 

//add Cheese price
maker.addCheesePrices = function(){
	var totalCheesePrice = 0
	for (var i = 0; i < cheese.length; i++) {
		totalCheesePrice += cheesePrices[cheese[i]]
	}
	return totalCheesePrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 