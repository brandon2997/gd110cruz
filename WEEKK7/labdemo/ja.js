window.onload = function(){
    var c = document.querySelector('canvas')
    var ctx = c.getContext("2d")

    var timer = requestAnimationFrame(draw);

    var deg = 45

    var rotaringBoxes = []
    var count = 10

    var x = 0;
    function GameObject(){
        this.x = 0;
        this.y = 0;
        this.w = 100
        this.h = this.w
        this.deg = 0 
        this.vx = 1
        this.vy = 1
        this.color= `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

        this.drawBox = function(){
            ctx.save();
            ctx.fillStyle =  this.color
            ctx.fillRect(this.x, this.y, this.w, this.h)
            ctx.restore()
        }

        this.drawRotateBox = function(){
            ctx.save();
            ctx.fillStyle =  this.color
            ctx.translate(this.x, this.y)
            ctx.rotate(deg+=1 * Math.PI/180)
            ctx.fillRect(0-this.x/2, 0-this.y/2, this.w, this.h)
            ctx.restore()
        }

    }
    var Box = new GameObject();
    var Boxro = new GameObject() 
    Boxro.x=300
    Boxro.y=300
    Box.x =0
    Box.y = 500
   for (var i = 0; i < count; i++){
       rotaringBoxes[i] = new GameObject ()
       rotaringBoxes.x = i * rotaringBoxes[i].w
       rotaringBoxes.y = 100
   
        if(rotaringBoxes[i].x > c.width){
            rotaringBoxes[i].y * i * rotaringBoxes[i].w +100;
            rotaringBoxes[i].x = 0
        }
    
    }
    function draw(){
/*
       
         ctx.fillStyle = "blue"
         ctx.save();
         ctx.translate(c.width/2, c.height/2)
         ctx.rotate(deg+=1 * Math.PI/180)
         ctx.fillRect(0-100, 0-100, 200, 200) ;
       ctx.restore()
       ctx.fillRect(x+=1, 100, 20, 20) ;
        
    */ctx.clearRect(0,0,c.width,c.height)
        Box.drawBox()
        Boxro.drawRotateBox()
        
        for(var i = 0; i<rotaringBoxes.length; i++){
            rotaringBoxes[i].drawRotateBox()
        }timer = requestAnimationFrame(draw)
} 

    draw();
}
