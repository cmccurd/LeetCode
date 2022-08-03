/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = '';
    
    for (var i = 0; i < s.length; i++) {
        var l = i;
        var r = i;
        while (r < s.length && s[l] === s[r]) {
            result = r - l + 1 > result.length ? s.slice(l, r + 1) : result;
            r++;
            l--;
        }
        
        var l = i;
        var r = i + 1;
        while (r < s.length && s[l] === s[r]) {
            result = r - l + 1 > result.length ? s.slice(l, r + 1) : result;
            r++;
            l--;
        }
    }
    return result;
};