let colorPicker = document.querySelector('#colorPicker');
let colorBox = document.querySelector('#colorBox');
let clearHistoryBtn = document.querySelector('#clearHistoryBtn');
let colorHistoryList = document.querySelector('#colorHistoryList');
let colorHistory = [];

colorPicker.addEventListener('input', (event) => {
    colorBox.style.backgroundColor = colorPicker.value;
    colorHistory.push(colorPicker.value);

    // Update the color history list
    colorHistoryList.innerHTML = '';
    if (colorHistory.length > 0) {
        colorHistory.forEach((color, index) => {
            let listItem = document.createElement('li');
            listItem.textContent = color;
            listItem.style.color = color;
            colorHistoryList.appendChild(listItem);
        });
    }
});

clearHistoryBtn.addEventListener('click', (event) => {
    colorBox.style.backgroundColor = '#fff';
    colorHistory = [];
    colorHistoryList.innerHTML = '';
});

