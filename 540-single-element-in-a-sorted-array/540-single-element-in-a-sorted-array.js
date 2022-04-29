/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    
    while (left <= right) {
        var mid = left + Math.floor((right - left)/2);
        var ln = nums[mid - 1];
        var lr = nums[mid + 1];
        if (nums[mid] !== ln && nums[mid] !== lr) {
            return nums[mid];
        } else if (mid % 2 === 0) {
            nums[mid] === ln ? right = mid - 1 : left = mid + 1;
        } else {
            nums[mid] === lr ? right = mid - 1 : left = mid + 1;
        }
    }
    return -1;
};
    
//[1,1,3,3,4,4,5,8,8]