/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var storage = {
        [nums[0]]: 1,
    };
    for (var i = 1; i < nums.length; i++) {
        if (storage[nums[i]]) {
            return true;
        } else {
            storage[nums[i]] = 1;
        }
    }
    return false;
};