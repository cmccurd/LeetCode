class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        subarray = 0
        res = -math.inf
        for x in nums:
            subarray = max(subarray + x, x)
            res = max(res, subarray)
            
        return res