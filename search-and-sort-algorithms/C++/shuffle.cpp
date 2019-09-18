// fisher yates shuffle

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
	// if it's 1 or 0 items, just return
	if (theVector.size() <= 1) {
		return;
	}
	for (size_t indexWeAreChoosingFor = 0;
			indexWeAreChoosingFor < theVector.size() - 1;
			++indexWeAreChoosingFor)
	{

		// choose a random not yet placed item to place
		// it must be an item AFTER the current item,
		// because the stuff before has all already
		// been placed !
		
		size_t randomChoiceIndex = getRandom(indexWeAreChoosingFor,
				theVector.size() - 1);

		// place the random choice in spot with a swap
		
		if (randomChoiceIndex != indexWeAreChoosingFor)
		{
			swap(theVector[indexWeAreChoosingFor], theVector[randomChoiceIndex])
		}

	}
}


// O(n) time
// O(1) space
