
let calculateArea = (width = 1, height = width) => {
    return width * height;
}

console.log(calculateArea()); // Output: 1
console.log(calculateArea(5)); // Output: 25
console.log(calculateArea(5, 10)); // Output: 50