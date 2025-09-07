package array;

import java.util.Scanner;

public class InputAndOutputOfArray1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("5개의 정수를 입력하세요:");

        int[] numArr = new int[5];
        for (int i = 0; i < numArr.length; i++) {
            int num = scanner.nextInt();
            numArr[i] = num;
        }

        /* 출력 */
        System.out.println("출력");
        for (int i = 0; i < numArr.length; i++) {
            System.out.print(numArr[i]);
            if (i != numArr.length - 1){
                System.out.print(", ");
            }
        }
    }
}
