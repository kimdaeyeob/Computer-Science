package array;

public class ArrayDIEx1 {
    public static void main(String[] args) {

        /* 2X3 2차원 배열 초기화 */
        int[][] arr = {
                {1,2,3},
                {4,5,6}
        };

        /* 2차원 배열의 길이를 활용 */
        for (int row=0; row<arr.length; row++){
            // arr.length: 행의 길이(개수)
            for (int col=0; col<arr[row].length; col++){
                // arr[row].length: 열의 길이(개수)
                System.out.println(arr[row][col] + " ");
            }
            System.out.println();
        }
    }
}
