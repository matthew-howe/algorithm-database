/**@file	/Users/matthewhowe/algorithm-database/cake/permpalin.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ permutation palindrome ]==================*/
/*===========================================================================*/
#include <iostream>
#include <string>

// C++11 lest unit testing framework
#include "lest.hpp"

using namespace std;

bool hasPalindromePermutation(const string& str)
{
	unordered_set<char> unpairedCharacters;

	for (char c : str) {
		if (unpairedCharacters.find(c) != unpairedCharacters.end()) {
			unpairedCharacters.erase(c);
		}
		else {
			unpairedCharacters.insert(c);
		}
		
	}
    return unpairedCharacters.size() <= 1;
}


const lest::test tests[] = {
    CASE("permutation with odd number of chars") {
        const auto result = hasPalindromePermutation("aabcbcd");
        EXPECT(result == true);
    },
    CASE("permutation with even number of chars") {
        const auto result = hasPalindromePermutation("aabccbdd");
        EXPECT(result == true);
    },
    CASE("no permutation with odd number of chars") {
        const auto result = hasPalindromePermutation("aabcd");
        EXPECT(result == false);
    },
    CASE("no permutation with even number of chars") {
        const auto result = hasPalindromePermutation("aabbcd");
        EXPECT(result == false);
    },
    CASE("empty string") {
        const auto result = hasPalindromePermutation("");
        EXPECT(result == true);
    },
    CASE("one character string") {
        const auto result = hasPalindromePermutation("a");
        EXPECT(result == true);
    }
};

int main(int argc, char** argv)
{
    return lest::run(tests, argc, argv);
}
