// This SandwichMaker IIFE augments the original one
var sandwichMaker = (function(maker) {

 // Private variable to store the different bread prices
 var condimentsPrices = {
     mayonnaise: 1,
     ketchup: 2,
     mustard: 3,
     BBQ: 4
 };

 // Augment the original object with another method
 maker.addCondiments = function(pick) {
   if (pick in condimentsPrices) {
     condimentsToppingPrice = condimentsPrices[pick];
   }
 };
 maker.getCondimentsToppingPrice = function() {
   return condimentsToppingPrice;
 };
  // Return the new, augmented object with the new method on it
 return maker;
 })(sandwichMaker || {});
 