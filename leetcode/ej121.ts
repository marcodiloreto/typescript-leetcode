
const prices = [7, 9, 2, 8, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))

function maxProfit(prices: number[]): number {
    if (prices.length <= 1) {
        return 0;
    }

    var minPrice = 100000000
    var maxProfit = 0

    for (var i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice)
        maxProfit = Math.max(prices[i] - minPrice, maxProfit)
    }
    return maxProfit
};