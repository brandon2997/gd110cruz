
/*var cars = ["tesla", "civic", "TowTrack", "Mac"]

console.log(cars.length)

for(var i = 0; i<cars.length;  i++){
console.log(cars[i])
}
var Planes = [];


for(var i = 1; i < 100; i++){
    Planes[i]= "planes" + (i+1).toString() 
    console.log(Planes[i])
}
*/
var c = document.querySelector('canvas')
var ctx = c.getContext('2d')

var time = requestAnimationFrame(main)

var numCars = 3
var car = []

var winner;
var gameStates = []
var currentStates = 0
var choice = 1

function GameObject(){
    this.x = 30
    this.y = 50
    this.w = 50
    this.h = 50
    this.color = "red"
    this.speed = 1
    this.fuel = 100
    this.draw = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    this.move = function(){
        this.x += this.speed
    }
}
var startline = new GameObject()
startline.y = 100
startline.x = 100
startline.w = 10
startline.h = 400
startline.color ="black"
var finline = new GameObject()
finline.y = 100
finline.x = 700
finline.w = 10
finline.h = 400
finline.color = "red"
for(var i = 0; i<numCars; i ++){
    car[i]= new GameObject();
    car[i].speed = randomRange(5,2)
    car[i].w = 75
    car[i].x = 20
}
car[0].y = 150;
car[1].y = 250;
car[2].y = 350;
car[0].color = "blue"
car[1].color = "pink"
gameStates[0]= function (){
    ctx.fillStyle ="rgba(0,0,0,0.5)"
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = "white"
    ctx.font= "60px arial"
    ctx.textAlign = "center"
    ctx.fillText("choose the winner", c.width/2, c.height/2-100)
    ctx.fillText("pick 1, 2, or 3 key", c.width/2, c.height/2+100)
   
}
gameStates[1]= function(){
    for(var i = 0; i < car.length; i++){
        car[i].move();
        if(car[i].x > finline.x){
             console.log(car[i].color) + "is the winner"
             winner = car[i]
             currentStates = 2
            }

    
    }
}
gameStates[2]= function(){
    ctx.fillStyle ="rgba(0,0,0,0.5)"
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = "white"
    ctx.font= "60px arial"
    ctx.textAlign = "center"

    if(winner === choice){
        ctx.fillText("winner is : Car:"+ (winner+ 1).toString() , c.width/2, c.height/2-100)
        ctx.fillText("You win", c.width/2, c.height/2-100)
    }else{
    ctx.fillText("winner is : Car:"+ (winner+ 1).toString() , c.width/2, c.height/2+100)
   ctx.fillText("You lose", c.width/2, c.height/2-100)
    }
}
document.addEventListener('keydown', choosewinner)
function choosewinner(e){
    if(currentStates == 0){
        if(e.keyCode === 49){
            choice = 0
            currentStates = 1
        }        
    }
    if(e.keyCode === 50){
        choice = 1
        currentStates = 1
    }  
    if(e.keyCode === 51){
        choice = 3
        currentStates = 1
    }  
}
function main(){
    ctx.clearRect(0,0,c.width, c.height);
    startline.draw();
    finline.draw();
   
for(var i = 0; i < numCars; i++){
    car[i].draw();
}
    gameStates[currentStates]()
     time = requestAnimationFrame(main)
}