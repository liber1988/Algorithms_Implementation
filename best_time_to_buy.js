function maxProfit(prices) {
  let minPrice = Infinity; // Initialize min price to a very large number
  let maxProfit = 0; // Initialize max profit to 0

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // Update min price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice; // Update max profit
    }
  }

  return maxProfit;
}
prices = [4, 44, 21, 15, 13, 21, 20, 1, 42];
console.log(maxProfit(prices));
