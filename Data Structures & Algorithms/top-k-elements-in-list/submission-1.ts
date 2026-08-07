class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const v of freq[i]) {
                res.push(v);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}
