/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const recurse = (perm, close, open) => {
        if (open === n && close === n) {
            res.push(perm);
            return
        } else {
            if (open < n) {
                recurse(perm + '(', close, open + 1);
            }
            if (open > close) {
                recurse(perm + ')', close + 1, open);       
            }
        }
    }
    recurse('', 0, 0);
    return res;
};