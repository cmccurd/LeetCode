/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //use two pointers technique
    //right pointer will be the inner edge of 1/2
    let right = nums.length - 1;
    let left = 0;
    let current = left;
    
    var swap = (a, b) => {
        [nums[a], nums[b]] = [nums[b], nums[a]];
    }
    while (current <= right) {
        if (nums[current] === 2) {
            swap(current, right);
            right--;
        } else if (nums[current] === 0) {
            swap(current, left);
            left++;
            current++;
        } else {
            current++;
        }
    }
};