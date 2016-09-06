// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var bread = [];
  // Private variable to store the different bread prices
  var breadPrices = {"pickles": 0.20,
  					         "lettuce": 0.30,
  					         "tomato": 0.40,
  					         "onion": 0.50
  					       };

  // Augment the original object with another method
  maker.addBread = function(bread) {
    breads.push(bread);
  };

 maker.removeBread =function(bread){
 	var index = bread.indexOf(bread);
 		if(index !== -1){
 			bread.splice(index, 1);
 		}
 } 

//add breads price
maker.addBreadPrices = function(){
	var totalBreadPrice = 0
	for (var i = 0; i < bread.length; i++) {
		totalbreadsPrice += breadPrices[bread[i]]
	}
	return totalBreadPrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 