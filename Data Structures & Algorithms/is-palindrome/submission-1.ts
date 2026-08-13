class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!s[left].match(/[a-z0-9]/i)) {
                left++;
                continue;
            }
            if (!s[right].match(/[a-z0-9]/i)) {
                right--;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
