/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const hash = {};
    let l = 0;
    let res = 0;
    
    for (var r = 0; r < s.length; r++) {
        var rightChar = s[r];
        
        if (!hash[rightChar]) {
            hash[rightChar] = 0;
        }
        hash[rightChar]++;
        var max = 0;
        
        for (const k in hash) {
            max = Math.max(max, hash[k]);
        }
        
        while ((r - l + 1) - max  > k) {
            var leftChar = s[l];
            hash[leftChar]--;
            l++;
            max = 0;
        
            for (const key in hash) {
                max = Math.max(max, hash[key]);
            }
        }
        res = Math.max(res, r - l + 1);
    }
    return res
};