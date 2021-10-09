/**@file	/Users/matthewhowe/algorithm-database/cake/inflight.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ inflight entertainment ]==================*/
/*===========================================================================*/
/* You've built an inflight entertainment system with on-demand movie streaming. */

/* Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length. */

/* Write a function that takes an integer flightLength (in minutes) and a vector of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength. */

/* When building your function: */

/* Assume your users will watch exactly two movies */
/* Don't make your users watch the same movie twice */
/* Optimize for runtime over memory */
#include <iostream>
#include <vector>

// C++11 lest unit testing framework
#include "lest.hpp"

using namespace std;

bool canTwoMoviesFillFlight(const vector<int>& movieLengths, int flightLength)
{
    unordered_set<int> movieLengthsSeen;

	for (int firstMovieLength : movieLengths) {
		int mathingSecondMovieLength = flightLength - firstMovieLength;
		if (movieLengthSeen.find(matchingSecondMovieLength) != movieLengthsSeen.end()) {
			return true;
		}
		movieLengthsSeen.insert(firstMovieLength);
	}

    return false;
}


