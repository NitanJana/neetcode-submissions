class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numset = new Set(nums);
        let longest = 0;

        for(const n of nums){
            if(!numset.has(n-1)){
                let length = 0;
                while(numset.has(n+length)){
                    length++;
                }
            longest = Math.max(longest,length)
            }
        }

        return longest
    }
}
