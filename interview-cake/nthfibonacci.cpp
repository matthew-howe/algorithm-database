/**@file	/Users/matthewhowe/algorithm-database/cake/nthfibonacci.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ fibonacci ]===============================*/
/*===========================================================================*/
#include <iostream>
using namespace std;

int fib(int n)
{
	if (n < 0) {
		throw invalid_argument(
				"Index was negative."
				" No such thing as a negative index in a series."
				);
	}
	else if (n == 0 || n == 1) {
		return n;
	}

	int lastlast = 0;
	int last = 1;
	int current = 0;

	for (int i = 1; i < n; ++i) {
		current = last + lastlast;
		lastlast = last;
		last = current;
	}
	
	return current;

}

int main()
{
	cout << fib(4) << endl;
}
