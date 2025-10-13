package ref;

public class ReferenceMethod2 {
    public static void main(String[] args) {
        Student student1 = createStudentInfo("홍길동", 20, 3);
        Student student2 = createStudentInfo("김철수", 22, 4);

        printStudentInfo(student1);
        printStudentInfo(student2);
    }

    // Student 객체를 생성하고 필드에 초기값을 설정한 후 객체를 반환
    // 메서드 밖에서 객체를 사용할 수 있도록 객체의 참조값을 반환
    static Student createStudentInfo(String name, int age, int grade){
        Student student = new Student();
        student.name = name;
        student.age = age;
        student.grade = grade;
        return student;
    }

    static void printStudentInfo(Student student){
        System.out.println("이름: "+student.name + ", 나이: "+student.age + ", 학년: "+student.grade);
    }
}
