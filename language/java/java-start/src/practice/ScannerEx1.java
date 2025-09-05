package practice;

import java.util.Scanner;

public class ScannerEx1 {
    public static void main(String[] args) {
        // 입력
        Scanner scanner = new Scanner(System.in);
        System.out.print("문자열을 입력하세요: ");
        String str = scanner.nextLine(); // 입력을 String으로 가져옴
        System.out.println("입력된 문자열: " + str);

        // 정수입력
        System.out.print("정수를 입력하세요: ");
        int intValue = scanner.nextInt(); // 입력을 int로 가져옴
        System.out.println("입력된 정수: " + intValue);

        // 실수 입력
        System.out.print("실수를 입력하세요:");
        double doubleValue = scanner.nextDouble(); // 입력을 double로 가져옴
        System.out.println("입력된 실수: " + doubleValue);
    }
}
