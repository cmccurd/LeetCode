
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.replace(' ', '').lower()
        l = 0
        r = len(s) - 1
        while l < r:
            while not(s[l].isalnum()) and l < r:
                l += 1
            while not(s[r].isalnum()) and l < r:
                r -= 1
            if s[r] != s[l]:
                return False
            l += 1
            r -= 1
        return True