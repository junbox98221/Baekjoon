let fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString();

let result = [];
function hanoi(count, from, to, via) {
    if (count === 1) {
        return result.push([from, to]);
    }
    hanoi(count - 1, from, via, to);
    result.push([from, to]);
    hanoi(count - 1, via, to, from);
}

hanoi(input, 1, 3, 2);

console.log(result.length);
console.log(result.map((item) => item.join(" ")).join("\n"));