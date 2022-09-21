/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {}; // number, index
    
    for (var i = 0; i < nums.length; i++) {
        var x = nums[i];
        
        if (target - x in hash) {
            return [hash[target-x], i];
        } else {
            hash[x] = i;
        }
    }
    
};