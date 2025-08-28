package loop;

public class MakeEvenNum {
    public static void main(String[] args) {
        int num = 0, count = 0;
        while(count<=10){
            num++;
            if (num % 2 == 0) {
                System.out.println(num);
            }
            count++;
        }
    }
}
