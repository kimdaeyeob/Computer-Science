package practice;

import java.util.Scanner;

public class calculatingProductPrice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("상품 가격을 입력하세요 (-1을 입력하면 종료): ");
        int price = scanner.nextInt();
        if(price == -1){
            System.out.println("프로그램을 종료합니다.");
            return;
        }

        System.out.print("구매하려는 수량을 입력하세요: ");
        int quantity = scanner.nextInt();

        int totalCost = price * quantity;
        System.out.print("총 비용: " + totalCost + "원입니다.");
    }
}
