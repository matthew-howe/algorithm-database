/**@file	/Users/matthewhowe/algorithm-database/cake/appeatsTwice.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ appears twice ]===========================*/
/*===========================================================================*/
/*
 I have a vector of n + 1n+1 numbers. Every number in the range 1..n1..n appears once except for one number that appears twice.
*/

Write a function for finding the number that appears twice.
#include <iostream>

unsigned int findRepeat(const vector<unsigned int>& numbers)
{
	if (numbers.size() < 2) {
		throw std::invalid_argument(
				"Finding duplicate requires at least two numbers");
	}
	
	unsigned int n = static_cast<unsigned int>(numbers.size() - 1);
	unsigned int sumWithoutDuplicate = (n * n + n) / 2;
	unsigned int actualSum = std::accumulate(numbers.begin(), numbers.end(), 0U);

	return actualSum - sumWithoutDuplicate
}
