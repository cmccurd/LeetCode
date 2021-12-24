/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const min = 0;
    var lowest = prices[0];
    var highest = -Infinity;
    var diff = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            diff = (highest - lowest) > diff ? highest - lowest : diff;
            lowest = prices[i];
            highest = -Infinity;
        } else {
            if (prices[i] > highest) {
                highest = prices[i];
            }
        }
    }   
    diff = (highest - lowest) > diff ? highest - lowest : diff;
    return diff > 0 ? diff : min;
};

