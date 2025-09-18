package method;

public class MethodEx1 {
    public static void main(String[] args) {
        int sum1 = add(5,10);
        System.out.println("결과 출력: " + sum1);
    }

    public static int add(int a, int b) {
        System.out.println("add() 메서드 호출됨 "+ "a: "+a+", b: "+b + " > 덧셈 수행");
        int sum = a+b;
        return sum;
    }
}
