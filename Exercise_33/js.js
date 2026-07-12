

changeTextbtn.addEventListener('click', () => {
    let changeIt = document.querySelector('#changeIt');
    let mainHeading = document.querySelector('#mainHeading');
    changeIt.textContent = "This is the changed text from click!";
    mainHeading.textContent = "Main Heading Changed!";

    // Log the changes to the console
    console.log("Changed Text Div:", changeIt.textContent);
    console.log("Changed Main Heading:", mainHeading.textContent);
});
