

const prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))

export function maxProfit(prices: number[]): number {

    if (prices.length < 1) return 0

    var prevDay = prices[0]
    var totProfit = 0
    var profit = 0

    for (var i = 1; i < prices.length; i++) {
        profit = Math.max(prices[i] - prevDay, 0)
        totProfit += profit
        prevDay = prices[i]
    }
    return totProfit
};