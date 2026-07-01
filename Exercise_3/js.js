let isSunny = true;
let isWeekend = true;

let canGo = isSunny && isWeekend; // true (both conditions are true)
console.log("Can I go Beach?", canGo); // true (both conditions are true)

console.log("Is it sunny or weekend?", isSunny || isWeekend); // true (one condition is true, true result)
