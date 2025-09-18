package method;

public class averageRefactoring1 {
    public static void main(String[] args) {
        int a = 1, b = 2, c = 3;
        int sum = sum(a, b, c);
        double avg = average(sum, 3);
        System.out.println("합계: " + sum);
        System.out.println("평균: " + avg);
    }

    public static int sum (int a, int b, int c) {
        return a+b+c;
    }

    public static double average (int total, int count) {
        return (double) total/count;
    }
}
