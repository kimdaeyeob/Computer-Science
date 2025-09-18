package method;

public class RefactoringForLoop1 {
    public static void main(String[] args) {
        String message = "Hello, world!";

        printRepeatMessage(message, 3);

        System.out.println("\n5번 반복 시작");
        printRepeatMessage(message, 5);

        System.out.println("\n7번 반복 시작");
        printRepeatMessage(message, 7);
    }

    static void printRepeatMessage(String message, int count) {
        for (int i=0; i<count; i++){
            System.out.println(message);
        }
    }
}
