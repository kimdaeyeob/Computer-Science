package array;

import java.util.Scanner;

public class _2ndArrayEx2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("학생수를 입력하세요:");
        int studentNum = scanner.nextInt();
        String[] subjects = {"국어", "영어", "수학"};
        int[][] scoreList = new int[studentNum][subjects.length];


        for (int i=0; i<studentNum; i++){
            System.out.println(i+1 + "번 학생의 성적을 입력하세요:");
            for (int j=0; j<subjects.length; j++){
                System.out.print(subjects[j] + " 점수: ");
                scoreList[i][j] = scanner.nextInt();
            }
        }

        // 출력
        for (int i=0; i<studentNum; i++){
            int sum = 0;
            for (int j=0; j<scoreList[i].length; j++){
                sum += scoreList[i][j];
            }

            double average = (double)sum / scoreList[i].length;
            System.out.println(i+1 + "번 학생의 총점: " + sum + ", 평균: " + average);
        }
    }
}
