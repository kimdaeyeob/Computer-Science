package ref;

public class ReferenceInMethod1 {
    public static void main(String[] args) {
        Student student1 = new Student();
        initializeStudentInfo(student1, "홍길동", 20, 3);

        Student student2 = new Student();
        initializeStudentInfo(student2, "김철수", 22, 4);

        printStudentInfo(student1);
        printStudentInfo(student2);
    }

    /* Student 객체의 필드에 값을 생성 */
    static void initializeStudentInfo(Student student, String name, int age, int grade){
        student.name = name;
        student.age = age;
        student.grade = grade;
    }

    /* Student 객체의 필드 값을 출력 */
    static void printStudentInfo(Student student){
        System.out.println("이름: "+student.name + ", 나이: "+student.age + ", 학년: "+student.grade);
    }
}
