#include <stdio.h>

int main (int arge, char* argv[]){
    int n1 = 1, n2 = 2, n3 = 3;
    int r1,r2,r3;

    r1 = (n2<=2) || (n3 > 3);
    r2 = !n3;
    r3 = (n1 > 1) && (n2 < 3);

    printf("%d", r3-r2+r1);
    return 0;
}
