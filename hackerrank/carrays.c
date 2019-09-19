#include <stdio.h>

int main()
{
    int n;
    int sum;

    scanf("%d", &n);

    int *val = malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
    {
        scanf("%d", val[i]);
        sum += val[i];
    }

    printf("%i", sum);
    free(val);
}