int binarySearch(int target, const int *nums, size_t numsLength)
{
    size_t floorIndex = 0;
    size_t ceilingIndex = numsLength;

    while (floorIndex < ceilingIndex) {
        size_t distance = ceilingIndex - floorIndex;
        size_t halfDistance = distance / 2;
        size_t guessIndex = floorIndex + halfDistance;
        int guessValue = nums[guessIndex];

        if (guessValue == target) {
            return 1;
        }

        if (guessValue > target) {
            ceilingIndex = guessIndex;
        }
        else {
            floorIndex = guessIndex + 1;
        }
    }

    return 0;
}
