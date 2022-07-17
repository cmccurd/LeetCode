# [200,7,3,1,9] 212
# [2,7,3,1,9] 16
class Solution:
    def rob(self, nums: List[int]) -> int:
        sum1, sum2 = 0, 0
        
        for i in range(len(nums) - 1, -1, -1):
            n = nums[i]
            temp = max(n + sum1, sum2)
            sum1 = sum2
            sum2 = temp
        return sum2