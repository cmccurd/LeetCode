/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    //input: array of song times
    //output: all of the pairs that sum is divisible by 60
    //constraints: no time
    //edgecases: 0, yes
    
    var result = 0;
    var i = 0;
    var map = {};
    
    while (i < time.length) {
        var remainder = time[i] % 60; // 30
        if (map[(60 - remainder) % 60] !== undefined) {
            result += map[(60 - remainder) % 60];
        }
        if (map[remainder] !== undefined) {
            map[remainder] += 1;
        } else {
            map[remainder] = 1;
        }
        
        i++;
    }
    return result;
};