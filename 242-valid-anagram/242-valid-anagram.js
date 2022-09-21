/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var sArr = new Array(26).fill(0);
    var tArr = new Array(26).fill(0);
    
    for (var i = 0; i < s.length; i++) {
        var sChar = s[i];
        var tChar = t[i];
        var a = "a";
        
        sArr[sChar.charCodeAt(0) - a.charCodeAt(0)]++;
        tArr[tChar.charCodeAt(0) - a.charCodeAt(0)]++;
    }
    return sArr.join() === tArr.join();
};