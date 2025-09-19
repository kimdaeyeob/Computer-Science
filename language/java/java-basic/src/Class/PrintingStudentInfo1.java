package Class;

public class PrintingStudentInfo1 {
    public static void main(String[] args) {
        String studentName1 = "학생1";
        int studentAge1 = 15;
        int studentGrade1 = 90;

        String studentName2 = "학생2";
        int studentAge2 = 16;
        int studentGrade2 = 80;

        printStudentInfo(studentName1, studentAge1, studentGrade1);
        printStudentInfo(studentName2, studentAge2, studentGrade2);
    }

    public static void printStudentInfo(String name, int age, int grade) {
        System.out.println("이름: "+ name + ", 나이: " + age + ", 성적: " + grade);
    }
}
