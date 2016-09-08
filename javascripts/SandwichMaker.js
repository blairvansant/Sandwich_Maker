var sandwichMaker = (function() {
    // var bread = "";
    // var cheese = "";
    // var meat = "";
    // var veggies = "";
    // var condiments = "";

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log(totalPrice);
    },
    getTotalPrice: function(){
      return totalPrice;
    }
  };
})();
