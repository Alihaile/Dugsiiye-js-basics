let multiply = (a, b) => {
    return a * b;
}

let devide = (a, b) => {
    let result = a / b;
    return result;
}

let operate = (a, b, callback) => {
    return callback(a, b);
};

console.log("a = 10, b = 5");
console.log("Result of multiplication:", operate(10, 5, multiply));
console.log("Result of division:", operate(10, 5, devide));