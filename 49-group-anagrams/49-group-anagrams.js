/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    
    for (let word of strs) {
        const count = new Array(26).fill(0);
        for (let char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        if (!hash[count]) {
            hash[count] = [word];
        } else {
            hash[count].push(word);
        }
    }
    return Object.values(hash);
};