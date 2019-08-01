/**@file	/Users/matthewhowe/algorithm-database/cake/wordcloud.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	31st Jul 2019
 * 	Last Update:	31st Jul 2019
 */

/*===========================================================================*/
/*===============================[ word cloud ]==============================*/
/*===========================================================================*/
#include <iostream>
#include <string>
#include <unordered_map>
#include "lest.hpp"

using namespace std;

class WordCloudData
{
private:
    unordered_map<string, size_t> wordsToCounts_;

    void populateWordsToCounts(const string& inputString)
    {
        // count the frequency of each word
        

    }

public:
    WordCloudData (const string& inputString)
    {
        populateWordsToCounts(inputString);
    }

    const unordered_map<string, size_t> getWordsToCounts() const
    {
        return wordsToCounts_;
    }
};

// tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

const lest::test tests[] = {
    CASE("simple sentence") {
        const string text = "I like cake";
        const unordered_map<string, size_t> expected { {"I", 1}, {"like", 1}, {"cake", 1} };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    },
    CASE("longer sentence") {
        const string text = "Chocolate cake for dinner and pound cake for dessert";
        const unordered_map<string, size_t> expected {
            {"and", 1},  {"pound", 1}, {"for", 2},
            {"dessert", 1}, {"Chocolate", 1}, {"dinner", 1}, {"cake", 2}
        };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    },
    CASE("punctuation") {
        const string text = "Strawberry short cake? Yum!";
        const unordered_map<string, size_t> expected {
            {"cake", 1}, {"Strawberry", 1}, {"short", 1}, {"Yum", 1}
        };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    },
    CASE("hyphenated words") {
        const string text = "Dessert - mille-feuille cake";
        const unordered_map<string, size_t> expected {
            {"cake", 1}, {"Dessert", 1}, {"mille-feuille", 1}
        };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    },
    CASE("ellipses between words") {
        const string text = "Mmm...mmm...decisions...decisions";
        const unordered_map<string, size_t> expected { {"mmm", 2}, {"decisions", 2} };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    },
    CASE("apostrophes") {
        const string text = "Allie's Bakery: Sasha's Cakes";
        const unordered_map<string, size_t> expected {
            {"Bakery", 1}, {"Cakes", 1}, {"Allie's", 1}, {"Sasha's", 1}
        };
        const WordCloudData actual(text);
        EXPECT(actual.getWordsToCounts() == expected);
    }
};

int main(int argc, char** argv)
{
    return lest::run(tests, argc, argv);
}
