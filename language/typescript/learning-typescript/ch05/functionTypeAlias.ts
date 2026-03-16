type StringToNum = (input: string) => number;
let stringToNum: StringToNum;

stringToNum = (input) => input.length;

stringToNum = (input) => input.toLowerCase();
