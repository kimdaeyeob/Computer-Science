function a() {
  console.log(this);
}

a(); // global object (window in browser, global in Node.js)

/**
 * * a()처럼 객체를 통하지 않고 독립적으로 호출하는 경우 엔진은 this를 전역 객체에 바인딩
 * * (함수 내부에서 this를 지정할 만한 객체(context)가 없으므로 기본값이 전역을 바라봄)
 */

/**
 * * 브라우저 환경 > 전역 객체의 이름: window > 브라우저 창과 관련된 모든 것을 담고 있는 객체
 */

/**
 * * Node.js 환경 > 전역 객체의 이름: global > 서버 측 실행 환경인 Node.js의 전역 범위 객체
 */
