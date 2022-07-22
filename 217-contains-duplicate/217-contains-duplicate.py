class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for x in nums:
            if x in map:
                return True
            map[x] = 0
        return False