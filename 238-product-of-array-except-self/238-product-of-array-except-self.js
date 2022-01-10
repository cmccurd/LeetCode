/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var result = [];
    const reducer = (previousValue, currentValue) => previousValue * currentValue;
    var product = nums.reduce(reducer);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            result.push(product / nums[i]);    
        } else {
            result.push(nums.slice(0, i).concat(nums.slice(i + 1)).reduce(reducer));
        }
    }
    return result;
};