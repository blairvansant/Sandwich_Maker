// This SandwichMaker IIFE augments the original one
var sandwichMaker = (function(maker) {

 // Private variable to store the different bread prices
 var breadPrices = {
     white: 1,
     wheat: 2,
     rye: 3,
     ciabatta: 4
 };

 // Augment the original object with another method
 maker.addBread = function(pick) {
   if (pick in breadPrices) {
     breadToppingPrice = breadPrices[pick];
   }
 };
 maker.getBreadToppingPrice = function() {
   return breadToppingPrice;
 };
  // Return the new, augmented object with the new method on it
 return maker;
 })(sandwichMaker || {});