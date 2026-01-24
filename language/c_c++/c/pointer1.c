#include <stdio.h>
#include <string.h>

int main(void){
    char str[50] = "nation";
    char *p2 = "alter"; // pointer to a string literal

    /*
    * * strcat > 문자열 + 주소값을 던져주면 해당 주소값이 가리키는 문자열을 합쳐서 반환
    */
    strcat(str, p2); 

    printf("%s", str);
    return 0;
}
