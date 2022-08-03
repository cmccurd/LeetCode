/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    var hash = {};
    var dfs = (i) => {
        if (hash[i] !== undefined) {
            return hash[i];
        }
        var res = 0;
        if (Number(s[i]) === 0) {
            hash[i] = 0;
            return 0;
        }
        if (i >= s.length - 1) {
            hash[i] = 1;
            return 1;
        }
        res += dfs(i + 1);
        if (i + 1 < s.length && Number(s[i] + s[i + 1]) < 27) {
            res += dfs(i + 2);
        }
        hash[i] = res;
        return res;
    }
    return dfs(0);
};