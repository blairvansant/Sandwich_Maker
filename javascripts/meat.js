// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
var meat = [];
  // Private variable to store the different meat prices
  var meatPrices = {"ham": 0.90, 
                    "turkey": 1.50,
                    "roast beef": 2.00,
                    "bacon": 2.50
                };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    meat.push(meat);
  };

 maker. removeMeat =function(meat){
 	var index = meat.indexOf(meat);
 		if(index !== -1){
 			meat.splice(index, 1);
 		}
 } 

//add meat price
maker.addMeatPrices =function(){
	var totalMeatPrice = 0
	for (var i = 0; i < meats.length; i++) {
		totalMeatPrice += meatPrices[meat[i]]
	}
	return totalMeatPrice;
}

// Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);