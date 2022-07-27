/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = {};
    var l = 0;
    let res = 0;
    
    for (var right = 0; right < s.length; right++) {
        var rightChar = s[right];
        
        if (!hash[rightChar]) {
            hash[rightChar] = 0;
        }
        hash[rightChar]++;
        
        
        while (hash[rightChar] > 1) {
            var leftChar = s[l];
            hash[leftChar]--;
            l++;
        }
        res = Math.max(res, right - l + 1);
    }
    return res;
};