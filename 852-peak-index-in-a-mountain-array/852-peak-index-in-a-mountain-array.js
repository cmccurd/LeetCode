/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //start in the mid close pointer on the side that is less.
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = l + Math.floor((r-l)/2);
        var val = arr[mid];
        var valL = arr[mid - 1];
        var valR = arr[mid + 1];
        
        if (val > valL && val > valR) {
            return mid;
        } else {
            val < valL ? r = mid - 1 : l = mid + 1;
        }
    }
};