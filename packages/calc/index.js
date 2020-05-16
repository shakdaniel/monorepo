const add = require("@monorepo/add");
const sub = require("@monorepo/sub");
const mul = require("@monorepo/mul");
const div = require("@monorepo/div");

const a = 5;
const b = 10;

console.log("test")
console.log("-----")
console.log(add(a, b)); // 15
console.log("-----")
console.log(sub(a, b)); // 5
console.log("-----")
console.log(mul(a, b)); // 50
console.log("-----")
console.log(div(a, b)); // 2
console.log("-----")
