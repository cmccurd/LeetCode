class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> solutions = new HashMap<Integer, Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            if (solutions.get(target - nums[i]) != null) {
                return new int[] { solutions.get(target - nums[i]), i };
            } 
            solutions.put(nums[i], i);
        }
        return new int[] {};
    }
}