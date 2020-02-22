const stock_prices = [10, 7, 5, 8, 11, 9];
const stock_prices_profit = [10, 7, 5, 4, 8, 11, 9, 6, 12];
const stock_prices_loss = [10, 7, 5, 4, 3, 1];

const instructions =
  " find the difference between the lowest number and the highest number in consectutive order ";

const applestocks = stockPrices => {
  let buyPrice = stockPrices[0];
  let bestTrade = stockPrices[1] - buyPrice;

  for (let i = 1; i < stockPrices.length; i++) {
    const curPrice = stockPrices[i];
    const potentialProfit = curPrice - buyPrice;

    bestTrade = Math.max(potentialProfit, bestTrade);
    buyPrice = Math.min(buyPrice, curPrice);
  }

  return bestTrade;
};

console.log(applestocks(stock_prices), " should equal 6");
console.log(applestocks(stock_prices_profit), " should equal 6");
console.log(applestocks(stock_prices_loss), " should equal 6");
