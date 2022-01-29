/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    
    for (let number of nums) {
        if (obj[number]) {
            return true;
        } else {
            obj[number] = 1;
        }
    }
    return false
};