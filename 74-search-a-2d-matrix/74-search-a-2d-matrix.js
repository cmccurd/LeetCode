/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var l = 0;
    var r = matrix.length - 1;

    while (l <= r && r > 0) {
        var mid = Math.floor((l + r) / 2);
        var len = matrix[mid].length;
        if (target > matrix[mid][len - 1]) {
            if (mid === r) {
                return false;
            }
            l = mid + 1;
        } else if (target < matrix[mid][0]) {
            r = mid - 1;
        } else {
            l = mid;
            break;
        }
    }
    
    var arr = matrix[l];
    l = 0;
    r = arr.length - 1;
    
    while (l < r) {
        var mid = Math.floor((l + r) / 2);
        if (target > arr[mid]) {
            l = mid + 1;
        } else if (target < arr[mid]) {
            r = mid - 1;
        } else {
            return true;
        }
    }
    return arr[l] === target;
};