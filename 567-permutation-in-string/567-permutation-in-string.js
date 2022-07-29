/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const s1Count = new Array(26).fill(0);
    
    for (const c of s1) {
        s1Count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    const hash = {};
    hash[s1Count] = 0;
    let l = 0;
    let r = s1.length - 1;
    
    while (r < s2.length) {
        let temp = l;
        s2Count = new Array(26).fill(0);
        while (temp <= r) {
            s2Count[s2[temp].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            temp++;
        }
        if (s2Count in hash) {
            return true;
        }
        
        l++;
        r++;
    }
    return false;
};