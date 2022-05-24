/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    //input two arrays
    //output: longest duration or lexicographically largest key
    //edgecase: -1
    if (keysPressed.length === 0) {
        return -1;
    }
    var hash = {};
    var i = 0;
    var key = keysPressed[i];
    var duration = releaseTimes[i];
    hash[duration] = [key];
    i++;
    while (i < keysPressed.length) {
        key = keysPressed[i];
        duration = releaseTimes[i] - releaseTimes[i-1];
        if (hash[duration] !== undefined) {
            hash[duration].push(key);
        } else {
            hash[duration] = [key];
        }
        i++;
    }
    var greatestDuration = Object.values(hash).pop();
    if (greatestDuration.length > 1) {
        greatestDuration.sort();
        return greatestDuration.pop();
    } else {
        return greatestDuration[0];
    }
};