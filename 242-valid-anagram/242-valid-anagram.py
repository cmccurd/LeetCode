class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        cntrS = Counter(s)
        for char in t:
            if char in cntrS:
                cntrS[char] -= 1
                if len(+cntrS) == 0:
                    return True
            else:
                return False
        return False