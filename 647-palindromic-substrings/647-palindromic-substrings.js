/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var res = 0;
    
    for (var i = 0; i < s.length; i++) {
        var l = i;
        var r = i;
        
        while (s[l] === s[r] && r < s.length) {
            res++;
            r++;
            l--;
        }
        
        l = i;
        r = i + 1;
        
        while (s[l] === s[r] && r < s.length) {
            res++;
            r++;
            l--;
        }
    }
    return res;
};