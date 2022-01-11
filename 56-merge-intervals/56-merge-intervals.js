/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((first, second) => first[0] - second[0]);
    var c_s;
    var c_e;
    var p_s = intervals[0][0];
    var p_e = intervals[0][1];
    var results = [];
    
    for (var i = 1; i < intervals.length; i++) {
        c_s = intervals[i][0];
        c_e = intervals[i][1];
        
        if (c_s <= p_e) {
            p_e < c_e ? p_e = c_e : null;
        } else {
            results.push([p_s, p_e]);
            p_s = c_s;
            p_e = c_e;
        }
    }
    results.push([p_s, p_e]);
    return results;
};