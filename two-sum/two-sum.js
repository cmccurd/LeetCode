/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var storage = {
        [nums[0]]: 0,
    };
    for (var i = 1; i < nums.length; i++) {
        if (storage[target - nums[i]] !== undefined) {
            return [storage[target - nums[i]], i];
        } else {
            storage[nums[i]] = i;
        }
    }
};
