// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var veggies = [];
  // Private variable to store the different veggies prices
  var veggiesPrices = {"lettuce": 0.20,
  					  "tomato": 0.30,
  					  "onion": 0.40,
  					  "pickle": 0.50
  					};

  // Augment the original object with another method
  maker.addVeggies = function(veggies) {
    veggies.push(veggies);
  };

 maker.removeVeggies =function(veggies){
 	var index = veggies.indexOf(veggies);
 		if(index !== -1){
 			veggies.splice(index, 1);
 		}
 } 

//add veggies price
maker.addVeggiesPrices = function(){
	var totalveggiesPrice = 0
	for (var i = 0; i < veggies.length; i++) {
		totalVeggiesPrice += veggiesPrices[veggies[i]]
	}
	return totalVeggiesPrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 