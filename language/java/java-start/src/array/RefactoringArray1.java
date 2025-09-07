package array;

public class RefactoringArray1 {
    public static void main(String[] args) {
        int[] scores = {90, 80, 70, 60, 50};
        int sum = 0;
        for (int score: scores) {
            sum += score;
        }
        double average = (double) sum / scores.length;
        System.out.println("점수 총합: " + sum);
        System.out.println("점수 평균: " + average);
    }
}
