/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var perm = [];
    
    var recurse = (sum, i) => {
        if (sum === target) {
            result.push(perm.slice());
            return;
        }
        if (sum > target) {
            return;
        }
        if (i === candidates.length) {
            return;
        }
        perm.push(candidates[i]);
        recurse(sum + candidates[i], i);
        perm.pop();
        recurse(sum, i + 1);
    }
    recurse(0, 0);
    
    return result;
};