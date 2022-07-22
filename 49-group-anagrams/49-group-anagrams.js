/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const map = {};
    for (const str of strs) {
        const key = [...str].sort();
        
        map[key] ? map[key].push(str) : map[key] = [str]
    }
    return Object.values(map);
};