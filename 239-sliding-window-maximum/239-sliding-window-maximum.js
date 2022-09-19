/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (k === 1) {
        return nums;
    }
    var results = [];
    
    var deque = [];
    var l = 0;
    var r = k - 1;
    
    while (l <= r) {
        if (deque[deque.length - 1] === undefined || deque[deque.length - 1] >= nums[l]) {
            deque.push(nums[l]);
            l++;
        } else {
            deque.pop();
            continue;
        }
    }
    l = 0;
    
    while (r < nums.length) {
        results.push(deque[0]);
        if(nums[l] === deque[0]) {
            deque.shift();
        }
        l++;
        r++;
        var invalid = true;
        while (invalid) {
            if (deque[deque.length - 1] === undefined || deque[deque.length - 1] >= nums[r]) {
                deque.push(nums[r]);
                invalid = false;
            } else {
                deque.pop();
                continue;
            }
        }
    }
    return results;
};