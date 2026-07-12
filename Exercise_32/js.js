
let mainHeading = document.querySelector('#mainHeading');
let textDiv = document.querySelector('#textDiv');
let paragraphs = document.querySelectorAll('p');

console.log("Main Heading:", mainHeading.textContent);
console.log("Text Div:", textDiv.textContent);
console.log("Paragraphs:");
console.log("Paragraphs:", paragraphs);
console.log("Number of Paragraphs:", paragraphs.length);
paragraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});