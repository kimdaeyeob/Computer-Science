package practice;

import java.util.Scanner;

public class ScannerLoopEx3 {
    public static void main(String[] args) {
        int sum = 0;
        Scanner scanner = new Scanner(System.in);

        while(true){
            System.out.print("정수 하나를 입력하세요: ");
            int inputNum = scanner.nextInt();

            if (inputNum == 0){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
            sum += inputNum;

        }
        System.out.println("최종합계: " + sum);
    }
}
