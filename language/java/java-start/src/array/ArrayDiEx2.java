package array;

public class ArrayDiEx2 {
    public static void main(String[] args) {
        int[][] arr = new int[2][3];

        int num = 1;

        for (int row=0; row<arr.length; row++){
            for (int col=0; col<arr[row].length; col++){
                arr[row][col] = num++;
            }
        }

        // 출력
        for (int row=0; row<arr.length; row++){
            for (int col=0; col<arr[row].length; col++){
                System.out.print(arr[row][col] + " ");
            }
            System.out.println();
        }
    }
}
