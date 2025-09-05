package practice;

import java.util.Scanner;

public class sumAndAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("숫자를 입력하세요. 입력을 중단하려면 -1을 입력하세요:");
        int sum = 0;
        int count = 0;
        while (true){
            int num = scanner.nextInt();
            if(num == -1){
                break;
            }
            sum += num;
            count++;

        }
        double average = (double) sum / count;

        System.out.println("입력한 숫자의 합: " + sum);
        System.out.println("입력한 숫자의 평균: " + average);
    }
}
