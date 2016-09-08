// This SandwichMaker IIFE augments the original one
var sandwichMaker = (function(maker) {

 // Private variable to store the different bread prices
 var meatPrices = {
     ham: 1,
     turkey: 2,
     roast: 3,
     bacon: 4
 };

 // Augment the original object with another method
 maker.addMeat = function(pick) {
   if (pick in meatPrices) {
     meatToppingPrice = meatPrices[pick];
   }
 };
 maker.getMeatToppingPrice = function() {
   return meatToppingPrice;
 };
  // Return the new, augmented object with the new method on it
 return maker;
 })(sandwichMaker || {});