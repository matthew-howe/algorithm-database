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

    int minPrice = stockPrices[0];
    int maxProfit = stockPrices[1] - stockPrices[0];

    for (size_t i = 1; i < stockPrices.size(); ++i) {
        int currentPrice = stockPrices[i];

        int potentialProfit = currentPrice - minPrice;

        maxProfit = max(maxProfit, potentialProfit);

        minPrice = min(minPrice, currentPrice);
    }

    return maxProfit;
}

int main()
{
	vector<int> v {10, 5, 5, 8, 11, 9};
	cout << getMaxProfit(v) << endl;
}
