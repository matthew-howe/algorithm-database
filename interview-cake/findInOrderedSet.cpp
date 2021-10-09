/**@file	/Users/matthewhowe/algorithm-database/cake/findInOrderedSet.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ find in ordered set ]=====================*/
/*===========================================================================*/
#include <iostream>
#include <vector>
using namespace std;

bool findinOrderedSet(int target, const vector<int>& nums)
{
	size_t floorIndex = 0;
	size_t ceilingIndex = nums.size();

	while (floorIndex < ceilingIndex) {
		size_t distance = ceilingIndex - floorIndex;
		size_t halfDistance = distance / 2;
		size_t guessIndex = floorIndex + halfDistance;

		int guessValue = nums[guessIndex];

		if (guessValue == target) {
			return true;
		}
		
		if (guessValue > target) {
			ceilingIndex = guessIndex;
		}
		else {
			floorIndex = guessIndex + 1;
		}
		
	}
	return false;
}
