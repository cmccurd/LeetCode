/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const countT = {};
    for (var c of t) {
        if (countT[c]) {
            countT[c]++;
        } else {
            countT[c] = 1;
        }
    }
    
    var result = "";
    var resultLength = Infinity;
    
    const window = {};
    const need = Object.keys(countT).length;
    var have = 0;
    
    var l = 0;
    for (var r = 0; r < s.length; r++) {
        var c = s[r];
        if (countT[c]) {
            if (window[c]) {
                window[c]++;
            } else {
                window[c] = 1;
            }
            if (countT[c] === window[c]) {
                have++;
            }
        }
        
        while (have === need) {
            if (resultLength > r - l + 1) {
                resultLength = r - l + 1;
                result = s.slice(l, r + 1);
            }
            if (window[s[l]]) {
                window[s[l]]--;
                if (window[s[l]] < countT[s[l]]) {
                    have--;
                }
            }
            l++;
        }
    }
    
    return result;
};