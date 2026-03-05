/**
 * * 교차타입은 잘못 사용하기 쉽고 사용이 불가능한 타입을 생성함
 * * 원시타입의 값은 동시에 여러 타입이 될 수 없으므로 교차 타입의 구성 요소로 함께 결합할 수 없음
 * ! 2개의 원시 타입을 함께 시도하는 경우 never타입이 됨
 */

type NotPossibleType = string & number;

/**
 * * never type > bottom type(값을 가질 수 없고 참조할 수 없는 타입 -> 어떠한 타입도 제공 하지않음.) 또는 empty type
 */
let notNumber: NotPossibleType = 0;
let notString: NotPossibleType = "zz";

/**
 * ! never 타입 > 코드에서 불가능한 상태를 나타냄. 보통 교차 타입을 잘못 사용해서 발생
 */
