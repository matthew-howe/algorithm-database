# Count the number of occurrences of each character and return it as a list of tuples in order of appearance.
#
# Example:
#
# ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

def ordered_count(str):
    letter_list = []
    for letter in str:
        if letter not in letter_list:
            letter_list.append(letter)
    return [(letter, str.count(letter)) for letter in letter_list
