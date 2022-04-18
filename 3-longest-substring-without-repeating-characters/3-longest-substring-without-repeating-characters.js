/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //hold longest substring value
    //use sliding window algo to find all substrings
    //create a map of current chars
    //return the value
    
    let longest = 0;
    let i = 0;
    var map = {};
    for (var j = 0; j < s.length; j++) {
        if (map[s[j]] < i) {
            delete map[s[j]];
        }
        if (map[s[j]] === undefined) {
            map[s[j]] = j;
            longest < s.substring(i, j + 1).length ? longest = s.substring(i, j + 1).length : null;
        } else {
            i = map[s[j]] + 1;
            map[s[j]] = j;
        }
    }
    return longest;
};

//given
//s = "abcdaf" bcdaf
//s = "abcdbfg" cdbfg

//s = "tmmzuxt" mzuxt