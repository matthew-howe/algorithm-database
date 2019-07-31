/**@file	/Users/matthewhowe/algorithm-database/cake/inplaceShuffle.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ inplace shuffle ]=========================*/
/*===========================================================================*/
#include <iostream>
#include <vector>

size_t getRandom(size_t floor, size_t ceiling)
{
	static random_device rdev;
	static default_random_engine generator(rdev());
	static uniform_real_distribution<double> distribution(0.0, 1.0);
	double value = distribution(generator);
	return static_cast<size_t>(value * (ceiling - floor + 1)) + floor;
}

void shuffle(vector<int>& theVector)
{
	if (theVector.size() <= 1) {
		return;
	}
	
	for (size_t index; index < theVector.size() - 1; ++index) {
		size_t randomIndex = getRandom(index, theVector.size() - 1);

		if (randomIndex != index) {
			swap(theVector[index], theVector[randomIndex]);
		}
	}
}
