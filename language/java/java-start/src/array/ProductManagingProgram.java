package array;

import java.util.Scanner;

public class ProductManagingProgram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int maxProductCount = 10;
        // 상품 이름을 저장할 String 배열
        String[] productsNames = new String[maxProductCount];

        // 상품 가격을 저장할 int 배열
        int[] productPrices = new int[maxProductCount];

        // 현재 등록된 상품의 개수를 저장할 int 변수
        int productCount=0;

        // 주의사항: 상품은 최대 10개까지 등록 가능
        while(true){
            System.out.println("1. 상품 등록 | 2. 상품 목록 | 3. 종료");
            System.out.print("메뉴를 선택하세요: ");
            int menuNumber = scanner.nextInt();

            switch (menuNumber){
                case 1:
                    // 상품 등록
                    if (productCount >= maxProductCount) {
                        System.out.println("더 이상 상품을 등록할 수 없습니다. (최대 10개)");
                        return;
                    }

                    System.out.print("상품 이름을 입력하세요:");
                    scanner.nextLine(); // 버퍼 비우기
                    productsNames[productCount] = scanner.nextLine();

                    System.out.print("상품 가격을 입력하세요:");
                    productPrices[productCount] = scanner.nextInt();
                    productCount++;
                    break;
                case 2:
                    // 상품 목록
                    if (productCount == 0) {
                        System.out.println("등록된 상품이 없습니다.");
                        return;
                    }
                    for (int i=0; i<productCount; i++){
                        System.out.printf("%s: %d원\n", productsNames[i], productPrices[i]);
                    }
                    break;
                case 3:
                    // 종료
                    System.out.println("프로그램을 종료합니다.");
                    return;
                default:
                    System.out.println("잘못된 메뉴 번호입니다. 다시 선택해주세요.");
                    break;
            }


        }
    }
}
