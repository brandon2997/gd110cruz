//JavaScript goes here//

var C = document.querySelector('canvas');
var ctx = C.getContext('2d')

function draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(200,100,200,200);
    // draw a line
    ctx.moveTo(0,0);
    ctx.lineTo(800,600);   
    ctx.stroke()
 
    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();
    //draw a circle
    ctx.beginPath()
    ctx.arc(C.width/2, C.width/2,20,0, 2*Math.PI,false);
    ctx.stroke()
    ctx.fill()
}
draw()