package practice;

import java.util.Scanner;

public class makeGuGu {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("정수 입력시 그 정수에 대한 구구단 출력. 정수 입력: ");

        int number = scanner.nextInt();
        for (int i=1; i<=9; i++){
            System.out.println(number + "*"+ i +"="+ (number*i));
        }
    }
}
