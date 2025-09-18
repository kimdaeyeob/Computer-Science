package method;

public class RefactoringStatements1 {
    public static void main(String[] args) {
        int balance = 10000; // 잔고

        /* 입금 */
        int depositAmount = 1000; // 입금액
        balance = printDepositResult(depositAmount, balance);

        /* 출금 */
        int withdrawAmount = 2000; // 출금액
        balance = printWithdrawResult(withdrawAmount, balance);
        System.out.println("최종 잔액: " + balance + "원");
    }

    static int printDepositResult(int deposit, int remainder){
        remainder += deposit;
        System.out.println(deposit + "원을 입금하였습니다. 현재 잔액: " + remainder+ "원");
        return remainder;
    }

    static int printWithdrawResult(int withdraw, int remainder){
        if(remainder >= withdraw){
            remainder -= withdraw;
            System.out.println(withdraw + "원을 출금하였습니다. 현재 잔액: " + remainder + "원");
        } else {
            System.out.println(withdraw+ "원을 출금하려 했으나 잔액이 부족합니다.");
        }
        return remainder;
    }
}
