class Solution:
    def isHappy(self, n: int) -> bool:
        map = {1: True}
        while True:
            if n in map:
                return map[n]
            map[n] = False
            sum = 0
            for char in str(n):
                sum += int(char) * int(char)
            n = sum
        