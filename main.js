"use strict"

const rButton = document.getElementsByClassName('leftArrow')[0];
const lButton = document.getElementsByClassName('rightArrow')[0];
const image1 = document.getElementsByClassName('image1')[0];
const image2 = document.getElementsByClassName('image2')[0];
const image3 = document.getElementsByClassName('image3')[0];
const image4 = document.getElementsByClassName('image4')[0];
const image5 = document.getElementsByClassName('image5')[0];
const imageArrey = document.getElementsByClassName('workImages')[0];

let images = [image1, image2, image3, image4, image5];
let start = [1];
7
rButton.addEventListener('click', leftArFunc);
lButton.addEventListener('click', rightArFunc);

function leftArFunc(){
    images[start%5].style.display = 'none';
    start++ ;
    images[(start+2)%5].style.display = 'flex';
    imageArrey.append(images[(start+2)%5]);
}

function rightArFunc(){
    images[start%5].style.display = 'none';
    start++ ;
    images[(start+2)%5].style.display = 'flex';
    imageArrey.prepend(images[(start+2)%5]);
}





