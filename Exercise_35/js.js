let myImage = document.querySelector('#myImage');
let changeImageBtn = document.querySelector('#changeImageBtn');

let changeImageAttributes = () => {
    let src = prompt("Enter the new image source (url):");
    myImage.setAttribute('src', src);

    let width = prompt("Enter the new image width (in pixels):");
    myImage.setAttribute('width', width);

    let height = prompt("Enter the new image height (in pixels):");
    myImage.setAttribute('height', height);

    let boderRadius = prompt("Enter the new image border radius (in pixels):");
    // myImage.style.borderRadius = boderRadius + "px";

    let borderColor = prompt("Enter the new image border color (like: red, #ff0000):");
    // myImage.style.borderColor = borderColor;
    // myImage.style.borderStyle = "solid";

    myImage.setAttribute('style', `border: 4px solid ${borderColor};border-radius: ${boderRadius}px;`);
}

changeImageAttributes();