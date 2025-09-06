package array;

public class ArrayRefEx1 {
    public static void main(String[] args) {
        int[] students;  // 배열 선언
        students = new int[5];  // 배열 생성

        int[] scores = new int[5];  // 배열 선언과 생성 동시에

        String[] names = new String[]{"홍길동", "김삿갓", "이몽룡", "성춘향", "장보고"};  // 배열 선언, 생성, 초기화 동시에

        System.out.println(students[0]);
        System.out.println(students[students.length-1]);
        System.out.println(scores);
        System.out.println(names);


        // 간단한 배열 생성
        int[] height = {172, 173, 175, 180, 178};  // 선언, 생성, 초기화 동시에 > Java가 내부에서 배열 요소의 크기를 보고 배열을 생성

    }
}
