class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const charMap1 = {};
        const charMap2 = {};

        for(let i=0; i<s.length; i++){
            charMap1[s[i]] = (charMap1[s[i]] || 0) +1
            charMap2[t[i]] = (charMap2[t[i]] || 0) +1
        }

        for(const key in charMap1) {
            if(charMap1[key] !== charMap2[key]){
                return false
            }
        }
        return true
    }
}
