class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        idx1 = 0
        idx2 = 1
        l = len(nums)
        
        while idx1 < l:
            while idx2 < l:
                if nums[idx1] + nums[idx2] == target:
                    return [idx1, idx2]
                idx2 += 1
            idx1 += 1
            idx2 = idx1 + 1