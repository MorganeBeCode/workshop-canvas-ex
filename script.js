const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// border
context.strokeStyle = "green";
context.lineWidth = "5";
context.strokeRect(0, 0, 500, 500);

// title
const x = context.measureText('Hello world').width;
context.font = '18px sans-serif';
context.fillText('Hello world', 250 - x, 50);

// squares
context.fillStyle = "red";
context.fillRect(70, 100, 50, 50);

context.strokeStyle = "blue";
context.lineWidth = "3";
context.strokeRect(170, 100, 50, 50);

context.fillStyle = "green";
context.fillRect(270, 100, 50, 50);

context.strokeStyle = "yellow";
context.lineWidth = "3";
context.strokeRect(370, 100, 50, 50);

// image
const img = new Image();
img.addEventListener('load', function () {
    // (origin cut x, or. cut y, width cut, height cut, pos x, pos y, width, heigth) 
    context.drawImage(img, 0, 0, 223, 200, 150, 200, 200, 200);
}, false);
img.src = "octopus.png";


