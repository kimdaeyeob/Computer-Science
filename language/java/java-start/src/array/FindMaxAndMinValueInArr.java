package array;

import java.util.Arrays;
import java.util.Scanner;

public class FindMaxAndMinValueInArr {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("입력받을 숫자의 개수를 입력하세요:");
        int count = scanner.nextInt();

        System.out.println(count + "개의 숫자를 입력하세요:");

        int[] numbers = new int[count];
        for (int i=0; i<count; i++ ){
            numbers[i] = scanner.nextInt();
        }

        /* 최대&최소 찾기 */
        Arrays.sort(numbers);
        System.out.println("가장 작은 정수: " + numbers[0]);
        System.out.println("가장 큰 정수: " + numbers[count-1]);
    }
}
