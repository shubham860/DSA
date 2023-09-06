// Array
// Best time to buy and sell stock
// --------------------------------
// You have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one

function maxProfit(priceArray) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i of priceArray) {
        if(i < minPrice) {
            minPrice = i;
        }else if(i - minPrice > maxProfit) {
            maxProfit = i - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7,6,4,3,1]))