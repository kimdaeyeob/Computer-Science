package practice;

import java.util.Scanner;

public class repeatNameAndAge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while(true){
            // 이름 입력
            System.out.print("이름을 입력하세요: ");
            String name = scanner.nextLine();

            // 나이 입력
            System.out.print("나이를 입력하세요: ");
            int age = scanner.nextInt();
            scanner.nextLine(); // 버퍼 비우기

            System.out.println("안녕하세요, " + name + "님! 당신의 나이는 " + age + "살입니다.");
            if(name.equals("종료")){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }



    }
}
