/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //variable lowest 
    //variable highest
    //variable max
    //iterate through prices
    //return max
    var lowest = Infinity;
    var highest = -Infinity;
    var max = 0;
    for (let price of prices) {
        if (price < lowest) {
            lowest = price;
            highest = -Infinity;
        } else if (price > highest) {
            highest = price;
        }
        
        highest - lowest > max ? max = highest - lowest : null;
    }
    
    return max;
};