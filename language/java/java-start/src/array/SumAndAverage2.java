package array;

import java.util.Scanner;

public class SumAndAverage2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("입력받을 숫자의 개수를 입력하세요:");
        int inputCount = scanner.nextInt();

        System.out.println(inputCount + "개의 정수를 입력하세요: ");
        int sum = 0;

        for (int i=0; i<inputCount; i++){
            sum += scanner.nextInt();
        }

        double average = (double) sum / inputCount;

        System.out.println("입력한 정수의 합계: "+ sum);
        System.out.println("입력한 정수의 평균: "+ average);
    }
}
