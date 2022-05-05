/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var storage = {};
    for (var i = 0; i < nums.length; i++) {
        if (storage[nums[i]] !== undefined) {
            return [storage[nums[i]], i];
        } else {
            storage[target-nums[i]] = i;
        }
    }
};