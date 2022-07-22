/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {}
    for (var i = 0; i < strs.length; i++) {
        var count = new Array(26).fill(0)
        for (j = 0; j < strs[i].length; j++) {
            count[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++
        }
        if (map[count]) {
            map[count].push(strs[i])
        } else {
            map[count] = [strs[i]]
        }
    }
    return Object.values(map)
};