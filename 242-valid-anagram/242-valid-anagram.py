class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        cntrS = Counter(s)
        l = len(cntrS)
        for char in t:
            if char in cntrS:
                cntrS[char] -= 1
                if cntrS[char] == 0:
                    l -= 1
                    if l == 0:
                        return True
            else:
                return False
        return False