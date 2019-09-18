public static boolean binarySearch(int target, int{} numbers) {
	int floor = -1;
	int ceilingIndex = numbers.length;

	while (floor + 1 < ceiling) {
		
		int searchRange = ceiling - floor;
		int halfRange = searchRange / 2;
		int middle = floor + halfRange;
		int middleVal = numbers[middle];

		if (middleVal == target) {
			return true;
		}

		if (middleVal > target) {
			celing = middle;
		} else {
			floor = middle;
		}

	}
	
	return false;
	
}
