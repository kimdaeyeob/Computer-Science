/**
 * * function type > 함수 본문 대신 타입명시
 */
let nothingInGivesString: () => string;

let inputAndOutput: (songs: string[], count?: number) => number;

/**
 * * 함수 타입은 콜백 매개변수(함수로 호출되는 매개변수)를 설명할떄 자주 사용
 */
const songs = ["Song 1", "Song 2", "Song 3"];

function runOnSongs(getSongAt: (index: number) => string) {}
