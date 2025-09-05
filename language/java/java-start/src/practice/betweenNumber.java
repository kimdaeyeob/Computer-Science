package practice;

import java.util.Scanner;

public class betweenNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("첫번째 숫자 입력: ");
        int num1 = scanner.nextInt();

        System.out.print("두번째 숫자 입력: ");
        int num2 = scanner.nextInt();
        int temp;

        if (num1> num2){
            temp = num1;
            num1 = num2;
            num2 = temp;
        }

        for (int i=num1; i<=num2; i++){
            System.out.print(i);
            if (i== num2){
                break;
            }
            System.out.print(", ");
        }
    }
}
