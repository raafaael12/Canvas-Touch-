
var lastPositionX, lastPositionY

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext('2d')
color = "black"
widthLine = 2;
var width = screen.width

var newWidth = screen.width - 70
var newHeight = screen.height - 300

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth
    document.getElementById("myCanvas").height = newHeight
    document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", myTouchStart)

function myTouchStart(e){
    color = document.getElementById("color").value 
    console.log(color)

    widthLine = document.getElementById("widthLine").value;

    mouseEvent = "mouseDown"

    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop

}

canvas.addEventListener("touchmove", myTouchMove)

function myTouchMove(e){
    
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine

    ctx.moveTo(lastPositionOfX,lastPositionY)

    ctx.lineTo(currentPositionOfTouchX,currentPositionOfTouchY);
    ctx.stroke();

    lastPositionX = currentPositionOfTouchX;
    lastPositionY = currentPositionOfTouchY;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}