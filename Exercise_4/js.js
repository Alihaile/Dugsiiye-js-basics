// function declaration
function add(a, b) {
    return a + b;
}

console.log("using function declaration");
console.log(add(5, 10)); // 15
console.log(add(6, 7)); // 13
console.log(add(3, 7)); // 10

// function expression
const add2 = function (a, b) {
    return a + b;
}

console.log("using function expression");
console.log(add2(5, 10)); // 15
console.log(add2(6, 7)); // 13
console.log(add2(3, 7)); // 10
