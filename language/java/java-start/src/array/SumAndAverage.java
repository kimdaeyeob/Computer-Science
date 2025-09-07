package array;

import java.util.Scanner;

public class SumAndAverage {
    public static void main(String[] args) {
        System.out.println("5개의 정수를 입력하세요: ");
        Scanner scanner = new Scanner(System.in);
        int[] numbers = new int[5];

        for (int i=0; i<numbers.length; i++){
            numbers[i] = scanner.nextInt();
        }

        /* 합계 */
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }

        /* 평균 */
        double average = (double) sum / numbers.length;

        System.out.println("입력한 정수의 합계: "+ sum);
        System.out.println("입력한 정수의 평균: "+ average);

    }
}
