#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    // create an array of length 10
    int *nums = (int *)malloc(10 * sizeof(int));
    char c;

    // initialize every index to be zero
    for (int i = 0; i < 10; i++)
    {
        *(nums + i) = 0;
    }

    // read the input and increment the corresponding index if the character is a number
    while (scanf("%c", &c) == 1)
    {
        if (c >= '0' && c <= '9')
        {
            (*(nums + (c - '0')))++;
        }
    }

    for (int i = 0; i < 10; i++)
    {
        printf("%d ", *(nums + i));
    }

    return 0;
}
