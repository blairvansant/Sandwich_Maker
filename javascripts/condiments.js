// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var condiment = [];
  // Private variable to store the different condiment prices
  var condimentPrices = {"mayonaise": 0.20,
  					             "mustard": 0.30,
  					             "1000 island": 0.40,
  					             "special sauce": 0.50
  					           };

  // Augment the original object with another method
  maker.addCondiment = function(condiment) {
    condiment.push(condiment);
  };

 maker.removeCondiment =function(condiment){
 	var index = condiment.indexOf(condiment);
 		if(index !== -1){
 			condiment.splice(index, 1);
 		}
 } 

//add condiment price
maker.addCondimentPrices = function(){
	var totalCondimentPrice = 0
	for (var i = 0; i < condiments.length; i++) {
		totalCondimentPrice += condimentPrices[condiment[i]]
	}
	return totalCondimentPrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 