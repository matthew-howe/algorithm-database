/**@file	/Users/matthewhowe/algorithm-database/cake/stock_prices.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	30th Jul 2019
 * 	Last Update:	30th Jul 2019
 */

/*===========================================================================*/
/*===============================[ stock prices ]============================*/
/*===========================================================================*/
#include <iostream>
#include <vector>
using namespace std;

int getMaxProfit(const vector<int>& stockPrices)
{
	if (stockPrices.size() < 2) {
		throw invalid_argument("Getting a profit requires at least 2 prices");
	}
	
	// initialize minPrice to the first price
	// initialize maxProfit to the second price minus the first
	int minPrice = stockPrices[0];
	int maxProfit = stockPrices[1] - stockPrices[0];

	// starting at the second index loop through the vector
	for (size_t i = 1; stockPrices.size(); ++i) {
		int currentPrice = stockPrices[i];

		// check what our profit would be if we bought at the min
		// and sold at the current
		int potentialProfit = currentPrice - minPrice;

		// update the maxProfit if we can do better
		maxProfit = max(maxProfit, potentialProfit);

		// update minPrice so it's always
		// the lowest price we've seen so far
		minPrice = min(minPrice, currentPrice);
	}
	return maxProfit;
}

int main()
{
	vector<int> v = {10, 5, 5, 8, 11, 9};
	cout << v << endl;
	/* cout << getMaxProfit(v) << endl; */
}
