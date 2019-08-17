#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
	char a;
	char b[10];
	char sen[100];

	scanf("%c", &a);
	scanf("%s", b);
	scanf(" %[^\n]%*c", sen);

	printf("%c\n", a);
	printf("%s\n", b);
	printf("%s\n", sen);

	return 0;
}
