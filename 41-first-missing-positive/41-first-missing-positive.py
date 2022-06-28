class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        
        n = len(nums)
        for i in range(n):
            if nums[i] < 0 or nums[i] > n:
                nums[i] = 0
        smallest = 0
        nums.sort()
        for num in nums:
            print(num)
            if num == 0:
                continue
            if num - smallest > 1:
                break
            smallest = num
        return smallest + 1
        