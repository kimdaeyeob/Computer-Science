/**
 * * 얕은 복사 > 객체의 최상위 레벨만 복사하고, 중첩된 객체는 참조만 복사함
 * ! 중첩된 객체는 같은 메모리 주소를 참조하므로, 복사본을 수정하면 원본도 영향을 받음
 */

import { original } from "./copyData.js";

console.log("original before copy:", original);

const shallowCopy = Object.assign({}, original);

shallowCopy.name = "김철수";
shallowCopy.address.city = "부산";

/**
 * ! 원본도 변경됨
 */

console.log("original:", original);
// original: { name: '홍길동', age: 22, address: { city: '부산', street: '용산구' } }

console.log("shallowCopy:", shallowCopy);
// shallowCopy: { name: '김철수', age: 22, address: { city: '부산', street: '용산구' } }

// 얕은 복사 결과: name은 독립적으로 변경되었지만, address.city는 참조가 복사되어 original에도 영향을 미침
