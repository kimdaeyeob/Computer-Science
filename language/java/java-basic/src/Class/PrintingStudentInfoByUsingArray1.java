package Class;

public class PrintingStudentInfoByUsingArray1 {
    public static void main(String[] args) {
        String[] studentNames = {"학생1", "학생2"};
        int studentAges[] = {15, 16};
        int studentGrades[] = {90, 80};

        for (int i = 0; i < studentNames.length; i++) {
            printStudentInfo(studentNames[i], studentAges[i], studentGrades[i]);
        }
    }

    public static void printStudentInfo(String name, int age, int grade) {
        System.out.println("이름: "+ name + ", 나이: " + age + ", 성적: " + grade);
    }
}
