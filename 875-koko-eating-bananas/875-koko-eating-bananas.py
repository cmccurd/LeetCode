
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        r = -math.inf
        l = 1
        for p in piles:
            if p > r:
                r = p
        
        result = r
        while l <= r:
            k = int(l + (r - l) / 2)
            c = 0
            for p in piles:
                c += math.ceil(p / k)   
            if c <= h:
                result = min(result, k)
                r = k - 1
            else:
                l = k + 1
        return result