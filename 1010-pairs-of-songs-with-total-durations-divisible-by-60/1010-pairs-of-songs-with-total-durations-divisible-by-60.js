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
    
    while (i < time.length) {
        var j = i + 1;
        while (j < time.length) {
            if ((time[i] + time[j]) % 60 === 0) {
                result++;
            }
            j++;
        }
        i++;
    }
    return result;
};