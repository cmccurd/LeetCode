/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    //first word identifier
    var letterLogs = [];
    var digitLogs = [];
    
    for (var log of logs) {
        var space = log.indexOf(' ');
        var contents = log.substring(space + 1);
        if (contents.search(/[a-z]/) === 0) {
            letterLogs.push([contents, log]);
        } else {
            digitLogs.push(log);
        }
    }
    
    letterLogs.sort((a, b) => {
        var compare = a[0].localeCompare(b[0]);
        if (compare === 0) {
            return a[1].localeCompare(b[1]);
        } else {
            return compare;
        }
    });
    
    var result = [];
    for (var i of letterLogs) {
        result.push(i[1]);
    }
    
    return [...result, ...digitLogs]
};