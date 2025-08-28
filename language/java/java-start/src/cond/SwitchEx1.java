package cond;

public class SwitchEx1 {
    public static void main(String[] args) {
        int grade = 2;
        int coupon = switch(grade) {
            case 1 -> 10000;
            case 2 -> 5000;
            case 3 -> 2000;
            default -> 0;
        };
        System.out.println("등급에 따른 쿠폰 결과: " + coupon + "원");
    }
}
