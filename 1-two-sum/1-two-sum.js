/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var storage = {} // key = target - current
    for (var i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (storage[target - current] !== undefined) {
            return [storage[target - current], i];
        } else {
            storage[current] = i;
        }
    }
};