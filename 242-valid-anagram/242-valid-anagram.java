class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] characters = new int[26];
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            characters[(int) c - (int) 'a']++;
        }
        for (int i = 0; i < t.length(); i++) {
            char c = t.charAt(i);
            characters[(int) c - (int) 'a']--;
        }
        return Arrays.toString(characters).equals(Arrays.toString(new int[26]));
    }
}