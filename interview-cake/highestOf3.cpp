/**@file	/Users/matthewhowe/algorithm-database/cake/highestOf3.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	30th Jul 2019
 * 	Last Update:	30th Jul 2019
 */

/*===========================================================================*/
/*===============================[ highest of 3 ]============================*/
/*===========================================================================*/
#include <iostream>
#include <vector>
using namespace std;

int highestProductof3(const vector<int>& vectorOfInts)
{
	if (vectorOfInts.size() < 3) {
		throw invalid_argument("Less than 3 items!");
	}
	
	// prepopulate higest and lowest based on the first 2 items
	int highest = max(vectorOfInts[0], vectorOfInts[1]);
	int lowest = min(vectorOfInts[0], vectorOfInts[1]);

	int highestProductOf2 = vectorOfInts[0] * vectorOfInts[1];
	int lowestProductOf2 = vectorOfInts[0] * vectorOfInts[1];

	int highestProductOf3 = vectorOfInts[0] * vectorOfInts[1] * vectorOfInts[2];

	for (size_t i = 2; i < vectorOfInts.size();++i) {
		int current = vectorOfInts[i];

		highestProductOf3 = max(max(
					highestProductOf3,
					current * highestProductOf2),
				current * lowestProductOf2);

		highestProductOf2 = max(max(
					highestProductOf2,
					current * highest),
				current * lowest);
		
		lowestProductOf2 = min(min(
					lowestProductOf2,
					current * highest),
				current * lowest);

		highest = max(highest, current);
		lowest = min(lowest, current);


	}
	return highestProductOf3;
}

int main()
{
	vector<int> v { 30, 20, 10, 5, 100, 1000 };
	cout << highestProductof3(v) << endl;
}
