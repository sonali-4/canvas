const canvas=document.getElementById("canvas");
canvas.width= window.innerHeight-60;
canvas.height=400;

let context=canvas.getcontext("2d")
context.fillstyle="white";
context.fillrect(0,0 canvas.width, canvas.height)

let draw_color= black;
let draw_width="2";
let is_drawing= false;

function change_color(element){
  draw_color =element.style.background;
}

canvas.addEventListener("touchstart",start,false);

canvas.addEventListener("touchmove",draw,false);

canvas.addEventListener("mousedown",start,false);

canvas.addEventListener("mousemove",draw,false);

canvas.addEventListener("touchend",stop,false);

canvas.addEventListener("mouseup",stop,false);

canvas.addEventListener("mousedown",stop,false);

function start(event){
  is_drawing=true;
  context.beingpath();
  context.moveto(event.clientX-canvas.offsetleft,
                 event.clientY-canvas.offsetTop);
  event.preventdefault();
}
function draw(event)
{
  if(is_drawing){
    context.lineTo(event.clientX-canvas.offsetleft,
                 event.clientY-canvas.offsetTop);
  context.strokestyle = draw_color;
  context.lineWidth= draw_width;
  context.lineCap="round";
  context.lineJoint="round";
  context.stroke();
  }
  event.preventdefault();
}
function stop(event){
  if(is_drawing){
    context.stroke();
    context.closepath();
    is_drawing=false;
  }
  event.preventdefault();
}

function download(filename, textInput) {

                  var element = document.createElement('a');
                  element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
                  element.setAttribute('download', filename);
                  document.body.appendChild(element);
                  element.click();
                  //document.body.removeChild(element);
            }
            document.getElementById("btn")
                  .addEventListener("click", function () {
                        var text = document.getElementById("text").value;
                        var filename = "output.txt";
                        download(filename, text);
                  }, false);