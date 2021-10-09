/**@file	/Users/matthewhowe/algorithm-database/cake/merge_sorted.cpp
 * @author	matthewhowe
 * @version	800
 * @date
 * 	Created:	30th Jul 2019
 * 	Last Update:	30th Jul 2019
 */

/*===========================================================================*/
/*====================[ Merge Sorted Arrays  ]===============================*/
/*===========================================================================*/
vector<int> mergeVectors(const vector<int>& myVector, const vector<int>& alicesVector)
{
	// create the final vector
	vector<int> mergedVecotr(myVector.size() + alicesVector.size());

	size_t currentIndexAlices = 0;
	size_t currentIndexMine = 0;
	size_t currentIndexMerged = 0;

	while (currentIndexMerged < mergedVector.size()) {
		
		bool isMyVectorExhausted = currentIndexMine >= myVector.size();
		bool isAlicesVectorExhausted = currentIndexAlices >= alicesVector.size();

		if (!isMyVectorExhausted && (isAlicesVectorExhausted
						|| (myVector[currentIndexMine] < alicesVector[currentIndexAlices]))) {
		mergedVector[currentIndexMerged] = myVector[currentIndexMine];
		++currentIndexMine;
		}
		else {
			mergedVector[currentIndexMerged] = alicesVector[currentIndexAlices];
			++currentIndexAlices;
		}
	++currentIndexMerged;	
	}
	return mergedVector;
}
