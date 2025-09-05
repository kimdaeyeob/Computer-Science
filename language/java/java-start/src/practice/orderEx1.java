package practice;

import java.util.Scanner;

public class orderEx1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("음식명: ");
        String foodName = scanner.nextLine();

        System.out.print("가격: ");
        int foodPrice = scanner.nextInt();

        System.out.print("수량: ");
        int foodQuantity = scanner.nextInt();

        int totalPrice = foodPrice*foodQuantity;

        System.out.println("["+foodName+"]" + "["+foodQuantity+"]"+"개를 주문하셨습니다. 총 가격은 ["+totalPrice+"]원 입니다.");
    }
}
