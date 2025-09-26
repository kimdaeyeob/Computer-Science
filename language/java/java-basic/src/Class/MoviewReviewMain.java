package Class;

public class MoviewReviewMain {
    public static void main(String[] args) {
        // 영화 리뷰정보 선언 및 출력
        MovieReview moviewReview1 = new MovieReview();
        moviewReview1.title = "신세계";
        moviewReview1.review = "인생영화. 꿀잼.";

        MovieReview moviewReview2 = new MovieReview();
        moviewReview2.title = "타짜";
        moviewReview2.review = "안본눈 삽니다.";

        MovieReview moviewReviews[] = {moviewReview1, moviewReview2};
        for (MovieReview mv: moviewReviews){
            System.out.println("영화제목: " + mv.title + " / 리뷰: " + mv.review);
        }
    }
}
