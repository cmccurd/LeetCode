class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2): return False
        
        s1_counter = Counter(s1)
        window = len(s1)
        r = window - 1
        matched = 0
        
        for l in range(len(s2)):
            #add counters in window
            if s2[l] in s1_counter:
                s1_counter[s2[l]] -= 1
                if s1_counter[s2[l]] == 0:
                    matched += 1
            
            #remove counters past window
            if l > r and s2[l - window] in s1_counter:
                if s1_counter[s2[l - window]] == 0:
                    matched -= 1
                s1_counter[s2[l - window]] += 1
            
            if matched == len(s1_counter):
                return True
        return False