class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        
        
        pos = int(r / 2)
        while l <= r:
            if nums[pos] > target:
                r = pos - 1
                pos = int(l + (r - l) / 2)
            elif nums[pos] < target:
                l = pos + 1
                pos = int(l + (r - l) / 2)
            else:
                return pos
        return -1