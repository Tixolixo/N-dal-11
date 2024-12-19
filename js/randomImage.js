const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["pic 1.jpg", "pic 2.jpg", "pic 3.jpg", "pic 4.jpg"];

myButton.addEventListener("click", changeImage);

function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = "images/" + images[randomIndex];
}

