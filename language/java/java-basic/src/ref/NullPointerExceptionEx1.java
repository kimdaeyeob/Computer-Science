package ref;

public class NullPointerExceptionEx1 {
    public static void main(String[] args) {
        Data data = null;
        data.value = 10; // Error > Dereference of 'data' will produce 'NullPointerException' at runtime
        System.out.println(data.value);
    }
}
