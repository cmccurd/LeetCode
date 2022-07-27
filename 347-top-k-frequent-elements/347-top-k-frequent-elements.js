/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hash = {};
    let sortedArray = Array.from({length: nums.length + 1}, () => []);
    
    for (const num of nums) {
        if (!hash[num]) {
            hash[num] = 0;
        }
        hash[num]++;
    }
    
    for (const key in hash) {
        sortedArray[hash[key]].push(key);
    }
    console.log(sortedArray);
    
    const res = [];
    
    for (var i = sortedArray.length - 1; i > 0; i--) {
        for (const c of sortedArray[i]) {
            res.push(c);
            if (res.length === k) {
                return res;
            }
        }
    }
    return [];
};