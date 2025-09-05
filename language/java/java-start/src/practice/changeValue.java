package practice;

public class changeValue {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int temp;

        temp = a;
        a = b;
        b = temp;

        System.out.println("a값: "+ a);
        System.out.println("b값: "+ b);


    }
}
