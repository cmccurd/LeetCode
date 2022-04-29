/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    //min is val on left that is greater than value on right.
    //max is val on left is greather than right
    var left = 0;
    var right = nums.length - 1;
    var end = nums[right];
    
    while (left <= right) {
        var mid = left + Math.floor((right - left)/2);
        var val = nums[mid];
        var valL = nums[mid - 1];
        var valR = nums[mid + 1];
        if (valL > valR) {
            return val < valR ? val : valR;
        } else if (val > end) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left]
};