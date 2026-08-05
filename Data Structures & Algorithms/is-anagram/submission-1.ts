class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        const mapS = {};
        const mapT = {};

        for (const char of s) {
            mapS[char] = (mapS[char] || 0) + 1;
        }

        for (const char of t) {
            mapT[char] = (mapT[char] || 0) + 1;
        }

        for (const key in mapS) {
            if (mapS[key] != mapT[key]) {
                return false;
            }
        }
        return true;
    }
}
