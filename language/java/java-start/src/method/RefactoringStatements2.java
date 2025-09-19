package method;

import java.util.Scanner;

public class RefactoringStatements2 {
    public static void main(String[] args) {
        int balance = 0; // 잔액
        while(true){
            System.out.println("---------------------------------");
            System.out.println("1.입금 | 2.출금 | 3.잔액 확인 | 4.종료");
            System.out.println("---------------------------------");

            /* 번호 입력 */
            Scanner scanner = new Scanner(System.in);
            System.out.print("선택: ");
            int choice = scanner.nextInt();

            switch (choice){
                case 1:
                    balance = deposit(balance);
                    break;
                case 2:
                    balance = withdraw(balance);
                    break;
                case 3:
                    System.out.println("현재 잔액: " + balance + "원");
                    break;
                case 4:
                    System.out.println("시스템을 종료합니다.");
                    return;
                default:
                    System.out.println("잘못된 입력입니다. 다시 시도하세요.");
                    break;
            }
        }
    }

    static int deposit(int balance){
        Scanner scanner = new Scanner(System.in);
        System.out.print("입금액을 입력하세요: ");
        int depositAmount = scanner.nextInt();
        balance += depositAmount;
        System.out.println(depositAmount + "원을 입금하였습니다." + " 현재 잔액: " + balance + "원");
        return balance;
    }

    static int withdraw(int balance){
        Scanner scanner = new Scanner(System.in);
        System.out.print("출금액을 입력하세요: ");
        int withdrawAmount = scanner.nextInt();
        if(withdrawAmount > balance){
            System.out.println(withdrawAmount+"원을 출금하려 했으나 잔액이 부족합니다.");
        } else {
            balance -= withdrawAmount;
            System.out.println(withdrawAmount + "원을 출금하였습니다." + " 현재 잔액: " + balance + "원");
        }
        return balance;
    }

    static void checkBalance(){

    }

    static void quit(){

    }
}
