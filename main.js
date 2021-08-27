canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_x , last_y;
var color="red";
var width=2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
mouseEvent="mousedown";
last_x=e.clientX-canvas.offsetLeft;
last_y=e.clientY-canvas.offsetTop;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent="mouseleave";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_x, last_y);
ctx.lineTo(current_x, current_y);
ctx.stroke();


}
last_x=current_x;
last_y=current_y;
}



