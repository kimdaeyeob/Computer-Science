package Class;

public class PrintingStudentInfoByUsingArray2 {
    public static void main(String[] args) {
        Student student1 = new Student();
        student1.name = "Alice";
        student1.age = 20;
        student1.grade = 30;

        Student student2 = new Student();
        student2.name = "Bob";
        student2.age = 22;
        student2.grade = 40;

        Student[] students = new Student[]{student1, student2};
//        System.out.println(students);
//        System.out.println(students[0]);
//        System.out.println(students[1]);

        // print
        for (int i = 0; i < students.length; i++) {
            System.out.println("Name: " + students[i].name);
            System.out.println("Age: " + students[i].age);
            System.out.println("Grade: " + students[i].grade);
            System.out.println();
        }
    }
}
