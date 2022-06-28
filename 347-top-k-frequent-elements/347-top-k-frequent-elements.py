class Solution(object):
    def topKFrequent(self, nums, k):
        count = {} # num, count
        freq = [[] for i in range(len(nums) + 1)] # array of length + 1 arrays 
        
        for num in nums:
            count[num] = 1 + count.get(num, 0)
            
        for key, value in count.items():
            freq[value].append(key)
        
        result = []
        
        for i in range(len(freq) -1 , 0, -1): #range(start, stop, increment) way to iterate by index
            for x in freq[i]:
                result.append(x)
                if len(result) == k:
                    return result