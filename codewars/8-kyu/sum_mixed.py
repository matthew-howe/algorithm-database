# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.

def sum_mix(arr):
    total = 0
    for num in arr:
        total += float(num)
    return total

def sum_mix(arr):
    return sum(map(float, arr))
