
var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false;}
    var sObj = {};
    var tObj = {};
    
    for (var i = 0; i < s.length; i++) {
        if (sObj[s[i]] === undefined) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]] += 1;
        }
        if (tObj[t[i]] === undefined) {
            tObj[t[i]] = 1;
        } else {
            tObj[t[i]] += 1;
        }
    }
    
    var sKeys = Object.keys(sObj);
    var tKeys = Object.keys(tObj);
    
    
    if (sKeys.length !== tKeys.length) {return false;}
    sKeys = sKeys.sort();
    tKeys = tKeys.sort();
    
    for (var i = 0; i < sKeys.length; i++) {
        if (sKeys[i] !== tKeys[i]) {return false;}
        if (sObj[sKeys[i]] !== tObj[tKeys[i]]) {return false;}
    }
    return true;
};
