class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagrams: Record<string, string[]> = {};

        for (const str of strs) {
            const sorted = str.split("").sort().join("");
            if (!anagrams[sorted]) {
                anagrams[sorted] = [];
            }
            anagrams[sorted].push(str);
        }

        return Object.values(anagrams);
    }
}
