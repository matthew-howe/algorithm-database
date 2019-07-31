/**@file	/Users/matthewhowe/cafeorder.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ «section» ]===============================*/
/*===========================================================================*/
bool isFirstComeFirstServed(const vector<int>& takeOut,
							const vector<int>& dineIn,
							const vector<int<& servedOrders)
{
	auto takeOutIter = takeOut.cbegin();
	auto dineInIter = dineIn.cbegin();

	for (int order : servedOrders) {
		
		// if we still have orders
		// and the current order in takeOut is the same
		// as the current order in served
		if (takeOutIter != takeOut.cend() && order == *takeOutIter) {
			++takeOutIter;
		}
		else if (dineInIter != dineIn.cend() && order == *dineInIter) {
			++dineInIter;
		}
		else {
			return false;
		}
	}
	return true;
}
