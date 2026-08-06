class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let pairMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const remaining = target - num;
            if (pairMap.has(remaining)) {
                return [pairMap.get(remaining), i];
            }
            pairMap.set(num, i);
        }
    }
}
