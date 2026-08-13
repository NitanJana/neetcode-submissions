class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0],
            maxProfit = 0;

        for (let price of prices) {
            maxProfit = Math.max(price - minPrice, maxProfit);
            minPrice = Math.min(minPrice, price);
        }

        return maxProfit;
    }
}
