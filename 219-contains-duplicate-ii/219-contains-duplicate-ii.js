/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var storage = {};
    
    for (var i = 0; i < nums.length; i++) {
        if (storage[nums[i]] !== undefined) {
            if (Math.abs(storage[nums[i]] - i) <= k) {
                return true;
            } else {
                storage[nums[i]] = i; 
            }
        } else {
            storage[nums[i]] = i;   
        }
    } 
    return false;
};