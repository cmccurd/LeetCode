class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        l = len(cost)
        memo = {}
        def recurse(i):
            if i >= l:
                return 0
            elif i in memo:
                return memo[i]
            
            cost1 = cost[i]
            cost2 = min(recurse(i + 1), recurse(i + 2))
            memo[i] = cost1 + cost2
            return memo[i]
        
        return min(recurse(0), recurse(1))