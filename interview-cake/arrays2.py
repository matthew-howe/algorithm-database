#!/usr/bin/env python
# -*- coding: utf-8 -*-

def reverse(list_of_characters):
    pointer_1 = 0
    pointer_2 = len(list_of_characters) - 1

    while (pointer_1 < pointer_2):
        list_of_characters[pointer_1], list_of_characters[pointer_2] = \
                list_of_characters[pointer_2], list_of_characters[pointer_1]
        pointer_1 += 1
        pointer_2 -= 1

    return list_of_characters

print(reverse([1,2,3,4,5,6,7,8,9]))
