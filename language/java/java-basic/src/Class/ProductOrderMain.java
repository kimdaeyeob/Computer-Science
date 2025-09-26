package Class;

public class ProductOrderMain {
    public static void main(String[] args) {
        ProductOrder productOrder1 = new ProductOrder();
        productOrder1.productName = "아이폰 14";
        productOrder1.price = 1200000;
        productOrder1.quantity = 2;

        ProductOrder productOrder2 = new ProductOrder();
        productOrder2.productName = "갤럭시 S23";
        productOrder2.price = 1000000;
        productOrder2.quantity = 3;

        int totalPrice = 0;
        ProductOrder productOrder[] = {productOrder1, productOrder2};
        for (ProductOrder po: productOrder){
            System.out.println("상품명: " + po.productName + " 가격: " + po.price + " 수량: " + po.quantity);
            totalPrice += po.price * po.quantity;
        }

        System.out.println("최종 결제금액: " + totalPrice + "원");
    }
}
