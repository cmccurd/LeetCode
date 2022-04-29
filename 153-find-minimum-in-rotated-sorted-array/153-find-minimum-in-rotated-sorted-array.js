/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    
    var start = nums[left];
    var end = nums[right];
    
    while (left <= right) {
        var mid = left + Math.floor((right - left)/2);
        var val = nums[mid];
        var valL = nums[mid - 1];
        
        if (val < valL) {
            return val;
        } else if (val < start) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return start;
};