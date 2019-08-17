#include <iostream>
#include <cstdlib>
using namespace std;

void update(int *a, int *b) {
    int temp = (*a);
    (*a) = (*a) + (*b);
    (*b) = abs(temp - (*b));
}

/* int main() { */

/*     int val = 10; */ 
/*     int val2 = -20; */
/*     update(&val, &val2); */ 

/*     cout << "val 1 is " << val << " and val2 is " << val2 << endl; */
    
/*     printf("hello world"); */
/*     return 0; */

/* } */

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}
