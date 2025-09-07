package array;

import java.util.Scanner;

public class ArrayReverseOrderPrinting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("5개의 정수를 입력하세요: ");
        int[] numbers = new int[5];

        for (int i=0; i<5; i++){
            numbers[i] = scanner.nextInt();
        }

        System.out.println("입력한 정수를 역순으로 출력:");
        for (int i=numbers.length-1; i>=0; i--){
            System.out.print(numbers[i]);
            if (0 < i){
                System.out.print(", ");
            }
        }
    }
}
