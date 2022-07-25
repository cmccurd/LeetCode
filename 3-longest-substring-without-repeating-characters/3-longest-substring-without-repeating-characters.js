/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hash = {};
    let start = 0;
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        let rightChar = s[i];
        
        if (!hash[rightChar]) {
            hash[rightChar] = 0;
        }
        hash[rightChar]++;
        
        while (hash[rightChar] > 1) {
            let leftChar = s[start];
            hash[leftChar]--;
            start++;
        }
        max = Math.max(max, i - start + 1)
    }
    return max
};

//given
//s = "abcdaf" bcdaf
//s = "abcdbfg" cdbfg

//s = "tmmzuxt" mzuxt