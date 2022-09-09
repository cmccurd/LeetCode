/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var l = 0;
    var r = numbers.length - 1;
    
    while (l < r) {
        if (target > numbers[r] + numbers[l]) {
            l++;
        } else if (target < numbers[r] + numbers[l]) {
            r--;
        } else {
            return [l + 1, r + 1];
        }
    }
};