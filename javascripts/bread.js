// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var bread= [];
  // Private variable to store the different breadprices
  var breadPrices = {"white": 0.20,
  					          "wheat": 0.30,
  					          "rye": 0.40,
  					          "ciabatta": 0.50
  					         };

  // Augment the original object with another method
  maker.addBread= function(bread) {
    bread.push(bread);
  };

 maker.removeBread=function(bread){
 	var index = bread.indexOf(bread);
 		if(index !== -1){
 			bread.splice(index, 1);
 		}
 } 

//add breadprice
maker.addBreadPrices = function(){
	var totalBreadPrice = 0
	for (var i = 0; i < bread.length; i++) {
		totalBreadPrice += breadPrices[bread[i]]
	}
	return totalBreadPrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
 