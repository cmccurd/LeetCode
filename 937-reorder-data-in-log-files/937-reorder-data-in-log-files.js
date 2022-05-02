/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    var letter_log = [];
    var digit_log = [];
    
    for (var log of logs) {
        var arr = log.split(' ');
        var identifier =  arr.shift();
        var contents = arr.join(' ');
        if (contents.search(/[a-z]/) === 0) {
            letter_log.push([contents, log]);
        } else {
            digit_log.push(log);
        }
    }
    
    var sort = letter_log.sort((a,b) => {
        var compare = a[0].localeCompare(b[0]);
        if (compare === 0) {
            return a[1].localeCompare(b[1]);
        }
        return compare;
    });

    var result = [];
    for (var key of sort) {
        result.push(key[1]);
    }
    result = result.concat(digit_log);
    return result;

};