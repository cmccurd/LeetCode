/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var isOpenPar = false; // ()
    var parCount = 0;
    var isOpenCurly = false; // {}
    var curlyCount = 0;
    var isOpenSquare = false; // []
    var squareCount = 0;
    var orderOfParentheses = [];
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            isOpenPar = true;
            parCount++;
            orderOfParentheses.push(s[i]);
        } else if (s[i] === ')' && orderOfParentheses[orderOfParentheses.length - 1] === '(') {
            orderOfParentheses.pop(); //delete the ending index
            parCount--;
            if (parCount === 0) {
                isOpenPar = false;
            }
        } else if (s[i] === '{') {
            isOpenCurly = true;
            curlyCount++;
            orderOfParentheses.push(s[i]);
        } else if (s[i] === '}' && orderOfParentheses[orderOfParentheses.length - 1] === '{') {
            orderOfParentheses.pop(); //delete the ending index
            curlyCount--;
            if (curlyCount === 0) {
                isOpenCurly = false;
            }
        } else if (s[i] === '[') {
            isOpenSquare = true;
            squareCount++;
            orderOfParentheses.push(s[i]);
        } else if (s[i] === ']' && orderOfParentheses[orderOfParentheses.length - 1] === '[') {
            orderOfParentheses.pop(); //delete the ending index
            squareCount--;
            if (squareCount === 0) {
                isOpenSquare = false;
            }
        } else {
            return false;
        }
    }
    
    return !isOpenPar && !isOpenCurly && !isOpenSquare ? true : false;
};