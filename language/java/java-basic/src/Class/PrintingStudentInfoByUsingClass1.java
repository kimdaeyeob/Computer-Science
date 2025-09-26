package Class;

public class PrintingStudentInfoByUsingClass1 {
    public static void main(String[] args) {
        /* 학생1 */
        Student student1;  // Student 클래스 타입의 student1 변수 선언
        student1 = new Student();
        student1.name = "학생1";
        student1.age = 15;
        student1.grade = 90;

        /* 학생2 */
        Student student2 = new Student();
        student2.name = "학생2";
        student2.age = 16;
        student2.grade = 80;
        System.out.println("이름:" + student1.name + " 나이:" + student1.age + " 성적:" + student1.grade);
        System.out.println("이름:" + student2.name + " 나이:" + student2.age + " 성적:" + student2.grade);
    }
}

