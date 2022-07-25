/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let chars = {};
    res = 0;
    let l = 0;
    let r = 0;
    
    while (r < s.length) {
        let rightChar = s[r];
        
        if (!chars[rightChar]) {
            chars[rightChar] = 0;
        }
        chars[rightChar]++;
        
        let totalC = 0;
        let maxC = 0;
        for (var key in chars) {
            totalC += chars[key];
            maxC = Math.max(maxC, chars[key])
        }
        
        while (totalC - maxC > k) {
            let leftChar = s[l];
            chars[leftChar]--;
            l++
            totalC = 0;
            maxC = 0;
            for (var key in chars) {
                totalC += chars[key];
                maxC = Math.max(maxC, chars[key])
            }
        }
            
        res = Math.max(res, totalC);
        r++;
    }
    
    return res;
};