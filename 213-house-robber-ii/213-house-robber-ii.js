/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    var first = 0;
    var second = 0;
    
    for (var i = 0; i < nums.length - 1; i++) {
        var n = nums[i];
        var temp = Math.max(n + first, second);
        first = second;
        second = temp;
    }
    
    first = 0;
    var third = 0;
    
    for (var i = 1; i < nums.length; i++) {
        var n = nums[i];
        var temp = Math.max(n + first, third);
        first = third;
        third = temp;
    }
    return second > third ? second : third;
};