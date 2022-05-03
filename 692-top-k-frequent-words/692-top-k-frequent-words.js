/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    var storage = {};
    
    for (var word of words) {
        if(!storage[word]) {
            storage[word] = 1;
        } else {
            storage[word] += 1;
        }
    }
    
    var sorted = Object.keys(storage).sort((a, b) => {
        var compare = storage[b] - storage[a];
        if (compare === 0) {
            return a.localeCompare(b);
        } else {
            return compare;
        }
    });

    return sorted.slice(0, k);
};