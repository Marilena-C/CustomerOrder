//WRITE YOUR CODE BELOW
//Declare menu object
var menu = {
    // Drinks properties are between curly brackets, with key-value pairs
        coffe: 4.5,
        latte: 6.5,
        coldBrew: 6,
        matcha: 7
    };

var prices = Object.values(menu);
//Print out the actual content
console.log("The menu contains the following drinks: " + Object.keys(menu));
//Print out the actual content

var total = 0;
for(var i = 0; i < prices.length; i++) {
   //total = total + prices[i]; 
   total += prices[i];
}
console.log("total menu cost = $ " +total);
