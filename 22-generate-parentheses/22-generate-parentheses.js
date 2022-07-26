/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const recurse = (perm, close, open) => {
        console.log(perm)
        if (open === n && close === n) {
            res.push(perm);
        } else {
            if (open > close && open < n) {
                recurse(perm + '(', close, open + 1);
                recurse(perm + ')', close + 1, open);
            } else if (open === n) {
                recurse(perm + ')', close + 1, open);       
            } else {
                recurse(perm + '(', close, open + 1);
            }
        }
    }
    recurse('', 0, 0);
    return res;
};