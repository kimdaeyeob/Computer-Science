package loop;

public class CalculateSum2 {
    public static void main(String[] args) {
        int sum = 0, max = 100;
        for (int i=1; i<=max; i++){
            sum += i;
        }
        System.out.println(sum);
    }
}
