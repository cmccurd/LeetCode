/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    var opensMin = 0;
    var opensMax = 0;
    
    for (var c of s) {
        if (c === '(') {
            opensMin++;
            opensMax++;
        } else if (c === ')') {
            opensMin--;
            opensMax--;
        } else {
            opensMin--;
            opensMax++;
        }
        if (opensMax < 0) {return false}
        if (opensMin < 0) {
            opensMin = 0;
        }
    }
    return opensMin === 0;
};