/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var last = 1;
    var secondFromLast = 1;
    
    for (var i = n - 2; i >= 0; i--) {
        var temp = secondFromLast;
        secondFromLast = secondFromLast + last;
        last = temp;
    }
    return secondFromLast;
};