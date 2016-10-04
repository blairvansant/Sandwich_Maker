// This SandwichMaker IIFE augments the original one
var sandwichMaker = (function(maker) {

 // Private variable to store the different bread prices
 var veggiesPrices = {
     lettuce: 1,
     tomato: 2,
     onion: 3,
     pickle: 4
 };

 // Augment the original object with another method
 maker.addVeggies = function(pick) {
   if (pick in veggiesPrices) {
     veggiesToppingPrice = veggiesPrices[pick];
   }
 };
 maker.getVeggiesToppingPrice = function() {
   return veggiesToppingPrice;
 };
  // Return the new, augmented object with the new method on it
 return maker;
 })(sandwichMaker || {});