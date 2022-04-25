/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length === 1) {
        return stones.pop();
    }
    stones.sort((a, b) => {
        return a-b;
    });
    let last = stones.pop();
    let last2 = stones.pop();
    stones.push(last-last2);
    return lastStoneWeight(stones);
};