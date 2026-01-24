#include <stdio.h>

int main(int argc, char* argv[]){
    /**
     * * &a[0] -> 10이라 가정 
     */
    int a[] = {14,22,30,38};
    printf("%u, ", &a[2]);
    printf("%u", a);
    return 0;  // program ended successfully
}
