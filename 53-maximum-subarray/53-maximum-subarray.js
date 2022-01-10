/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    var largestSum = nums[0];
    var prevSum = largestSum;
    
    for (var i = 1; i < nums.length; i++) {
        //check between itself and prev
        if (nums[i] > prevSum + nums[i]) {
            prevSum = nums[i];
        } else {
            prevSum = prevSum + nums[i];
        }
        
        if (prevSum > largestSum) {
            largestSum = prevSum;
        }
    }
    return largestSum;
};