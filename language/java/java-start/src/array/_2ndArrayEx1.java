package array;

import java.util.Scanner;

public class _2ndArrayEx1 {
    public static void main(String[] args) {
        /*
        * 4명의 학생 > 국영수 입력 후 각 학생별 총점&평균 계산
        * **/
        Scanner scanner = new Scanner(System.in);
        int[][] scoreList = new int[4][3];
        int score;

        for (int student=0; student< scoreList.length; student++){
            System.out.println(student+1 +"번 학생의 성적을 입력하세요:");
            for (int subject=0; subject<scoreList[student].length; subject++){
                switch (subject){
                    case 0:
                        System.out.print("국어 점수: ");
                        break;
                    case 1:
                        System.out.print("영어 점수: ");
                        break;
                    case 2:
                        System.out.print("수학 점수: ");
                        break;
                }
                score = scanner.nextInt();
                scoreList[student][subject] = score;
            }
        }

        // 출력
        for (int student=0; student< scoreList.length; student++){
            int sum = 0;
            for (int subject=0; subject<scoreList[student].length; subject++){
                sum += scoreList[student][subject];
            }
            double average = (double)sum / scoreList[student].length;

            System.out.println(student+1 + "번 학생의 총점: " + sum + ", 평균: " + average);
        }
    }
}
