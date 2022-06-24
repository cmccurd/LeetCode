class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {} # value -> index
        i = 0
        l = len(nums)
        
        while i < l:
            diff = target - nums[i]
            if diff in map:
                return [map[diff], i]
            map[nums[i]] = i
            i += 1