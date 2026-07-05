const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

for (const person of people) {
    for (const key in person) {
        console.log(key + ": " + person[key]);
    }
    console.log("------------");
}