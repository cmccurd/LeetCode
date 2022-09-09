/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var maxLeft = [0];
    var maxRight = [0];
    var minLR = [];
    var result = 0;
    
    var max = 0;
    for (var i = 1; i < height.length; i++) {
        max = Math.max(max, height[i - 1]);
        maxLeft.push(max);
    }
    
    max = 0;
    for (var i = height.length - 2; i >= 0; i--) {
        max = Math.max(max, height[i+1]);
        maxRight.unshift(max);
    }
    
    for (var i = 0; i < height.length; i++) {
        minLR.push(Math.min(maxRight[i], maxLeft[i]));
    }
    
    for (var i = 0; i < height.length; i++) {
        var temp = Math.max(0, minLR[i] - height[i]);
        result += temp;
    }
    
    return result;
};