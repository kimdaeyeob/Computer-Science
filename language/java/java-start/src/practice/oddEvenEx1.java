package practice;

import java.util.Scanner;

public class oddEvenEx1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("정수를 입력하세요: ");

        int number = scanner.nextInt();

        if (number%2 == 0 ){
            System.out.println(number+ " > 짝수");
        } else {
            System.out.println(number+ " > 홀수");
        }
    }
}
