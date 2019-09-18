/**@file	/Users/matthewhowe/search-and-sort-algorithms/C++/mergeSort.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ merge sort ]==============================*/
/*===========================================================================*/

#include <iostream>
#include <vector>
using namespace std;

void mergeSort(vector<int>& vectorToSort)
{
	// base case: arrays with 1 or less items are already sorted
	if (vectorToSort.size() < 2) {
		return;
	}
	
	// divide the array in half
	// using integer division never gives us a half index
	size_t midIndex = vectorToSort.size() / 2;

	vector<int> left(vectorToSort.begin(), vectorToSort.begin() + midIndex);
	vector<int> right(vectorToSort.begin() + midIndex, vectorToSort.end());

	// sort each half
	mergeSort(left);
	mergeSort(right);

	// merge the sorted halves
	size_t leftIndex = 0;
	size_t rightIndex = 0;

	for (size_t index = 0; index < vectorToSort.size(); ++index) {
	
		// sortedLeft's first element comes next
		// if it's less than sortedRight's first
		// element or if sortedRight is exhausted

		if (leftIndex < left.size()
				&& (rightIndex >= right.size()
				|| left[index] < right[index])) {
			vectorToSort[index] = left[index];
			++leftIndex;
		}
		else {
			vectorToSort[index] = right[index];
			++rightIndex;
		}
	}
}
