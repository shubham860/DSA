// # Array
// # Best time to buy and sell stock

//  You have an array for which the ith element is the price of a given stock on day i.
//  If you were only permitted to complete as many transactions as you like (buy one and sell one share of the stock multiple times),
//  design an algorithm to find the maximum profit.
//  Note that you cannot sell a stock before you buy one. 


function maxProfit(priceArray) {
    let profit = 0;
    for(let i=0; i<priceArray.length; i++) {
        if(priceArray[i] > priceArray[i-1]) {
            profit += priceArray[i] - priceArray[i-1]
        }
    }
    return profit;
}

console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]))