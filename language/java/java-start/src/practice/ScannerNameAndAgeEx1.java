package practice;

import java.util.Scanner;

public class ScannerNameAndAgeEx1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 이름 입력 받기
        System.out.print("당신의 이름을 입력하세요:");
        String name = scanner.nextLine();

        // 나이 입력받기
        System.out.print("당신의 나이를 입력하세요:");
        int age = scanner.nextInt();

        // 출력
        System.out.println("당신의 이름은 " + name + "이고, 나이는 " + age + "살 입니다.");
    }
}
