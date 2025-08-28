package loop;

public class Ex1 {
    public static void main(String[] args) {
        int i = 1, endNum = 3;
        int sum = 0;
        while (i <= endNum) {
            sum += i;
            i++;
            System.out.println("i값 = " + i);
            System.out.println("endNum값 = " + endNum);
            System.out.println("합산값 = " + sum);
        }
        System.out.println((i+ "부터 " + endNum + "까지의 합은 " + sum + "입니다."));
    }
}
