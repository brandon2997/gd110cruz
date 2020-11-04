//JavaScript goes here//

var C = document.querySelector('canvas');
var ctx = C.getContext('2d')
var mario= new Image()
mario.src = 'images/mairo.png'
var timer = requestAnimationFrame(draw)
var x = 0

function draw(){
    timer = requestAnimationFrame(draw)
    ctx.clearRect(0,0, C.width, C.height)
   x++
   if(x > console.width){
       x = -200
   }
    /* ctx.fillStyle = 'red'
    ctx.fillRect(200,100,200,200);
    // draw a line
    ctx.moveTo(0,0);
    ctx.lineTo(800,600);   
    ctx.stroke()
 
    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();
    //draw a circle
    ctx.lineWidth =5
    ctx.beginPath()
    ctx.arc(C.width/2, C.height/2,20,0, 2*Math.PI,false);
    ctx.stroke()
    ctx.fill() */
    ctx.drawImage(mario, x,0,200,200)
    ctx.lineWidth = 1
    ctx.fillStyle = 'black'
    ctx.font = "50px Arial"
    ctx.textAlign = "center"
    ctx.fillText("week 4 lab",C.width/2 , 50)
    ctx.strokeText("week 4 lab",C.width/2 , 50)
    console.log ('WEAREAnimating')
    
}
draw()