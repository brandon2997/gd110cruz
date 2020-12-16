var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 10;
var asteroids = new Array();
var numAsteroids = 35;
var gameOver = true;
var score = 0;
var gameStates = [];
var currentState = 0;
var ship;
var inv = 0
var astro = new Image()
astro.src = 'images/astro.png'
var menu = new Image()
menu.src = 'images/AstroMenu.png'
var shipu = new Image()
shipu.src = 'images/rocone.png'
var lose = new Image()
lose.src = 'images/Astrolose.png'
var back = new Image()
back.src = 'images/seamless.png'

function randomRange(high, low){
    return Math.random() * (high-low) + low;
}
menu.onload= function(){
    main()
}
lose.onload= function(){
    main()
}
astro.onload= function(){
    main()
}
shipu.onload = function(){
    main()
}

//Class for the Asteroids
function Asteroid(){
    this.radius = randomRange(10,2);
    this.y = randomRange(c.height - this.radius, 0 + this.radius);
    this.x = randomRange(c.width - this.radius, 0 + this.radius) + c.width;
    this.vy = randomRange(-5, -10);
    this.vx = randomRange(10,5);
    this.color = "white";

    this.draw = function(){
        
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        context.closePath();
        context.fill();
        context.drawImage(astro, this.x-this.radius, this.y-this.radius, this.radius*2, this.radius*2)
        context.restore();
        
    }
}

function gameStart() {
    //for loop to create the intances of the asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid();
    }
    //create the instance of the ship for the game
    ship = new PlayerShip();
}

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this drws the flame behind the ship
        if(this.up == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10;
            }
            else{
                this.flamelength = 30;
            }
            context.fillStyle = "orange";
            context.beginPath();
            context.moveTo(this.flamelength,0);
            context.lineTo(10, 15);
            context.lineTo(10, -15);
            context.lineTo(this.flamelength,0 );
            context.closePath();
            context.fill();
            context.restore();
        }
        context.beginPath();
        
        /*context.fillStyle = "red";
        context.moveTo(10, -13);
        context.lineTo(10, 10);
        context.lineTo(-15, 10);
        context.lineTo(10, -13);
        context.closePath();
        context.fill();*/
        context.drawImage(shipu, 0, 0)
        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        //adds boundaries and keeps ship on the screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if we are past the top of the canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we are past right 0r left side of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        //left side
        if(this.x < 0 + 10){
            this.x =  10;
            this.vx = 0;
        }
    }
}



document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down " + e.keyCode);
    if(gameOver == false){
        if(e.keyCode === 68){
            
            ship.up = true;
        }
        if(e.keyCode === 83){
            ship.left = true;
        }
        if(e.keyCode === 87){
            ship.right = true;
        }
    }
    if(gameOver == true){
        if (e.keyCode === 13) {
            

            if (currentState == 2) {
                score = 0;
                numAsteroids = 10;
                asteroids = [];
                gameStart();
                
                currentState = 0;

            }
            else {
                gameStart();
                gameOver = false;
                currentState = 1;
                setTimeout(scoreTimer, 1000);
            }
        }
    }
    
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
    if(gameOver == false){
        if(e.keyCode === 68){
            ship.up = false;
        }
        if(e.keyCode === 83){
            ship.left = false;
        }
        if(e.keyCode === 87){
            ship.right = false;
        }
    }
}


//Game States for menus and gameplay
gameStates[0] = function(){
    context.save();
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Asteroid Avoider",c.width/2,c.height/2 - 30);
    context.font = "15px Arial";
    context.fillText("Press Enter to Start", c.width/2,c.height/2 + 20);
    context.drawImage(menu, 0,0)
    context.restore();
    
}

gameStates[1] = function(){
    //Game code from main function goes here
    //display score
    context.save();
    
    context.font = "15px Arial"
    context.fillStyle = "white"
    context.fillText("Score: " + score.toString(), c.width - 150, 30);
    context.restore();

    //ship.vy += gravity;

    if(ship.up == true){
        ship.vx = 10;
    }
    else{
        ship.vx = -5;
    }

    if(ship.left == true){
        ship.vy = 5;
    }
    else if(ship.right == true){
        ship.vy = -5;
    }
    else{
        ship.vy = 0;
    }

    for(var i = 0; i<asteroids.length; i++){
        //using the distance formula to find distance between ship and asteroid
        var dX = ship.x - asteroids[i].x;
        var dY = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dX*dX)+(dY*dY));
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
           // console.log("We collided with Asteroid " + i);
            gameOver = true;
            currentState = 2;
            //document.removeEventListener('keydown', keyPressDown);
            //document.removeEventListener('keyup', keyPressUp);
        }

        //checks to see if asteroid is off screen
        if(asteroids[i].x  < asteroids[i].radius-c.width ){
            //reset steroids position off screen 
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius)+c.width;
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        if(gameOver == false){
            //this moves the Asteroids
            asteroids[i].x -= asteroids[i].vx;
        }
        asteroids[i].draw();
    }

    ship.draw();
    if(gameOver == false){
      ship.move();  
    }
    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
}

gameStates[2] = function(){
    context.save();
    context.font = "30px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText("Game Over Your score was : " + score.toString() ,c.width/2,c.height/2 - 30);
    context.font = "15px Arial";
    context.fillText("Press Enter to Play Again", c.width/2,c.height/2 + 20);
    context.drawImage(lose,0,0)
    context.restore();
}



function main(){
    context.clearRect(0,0, c.width, c.height);
    /*
        this is where our original game code was
    */
    gameStates[currentState]();
    timer = requestAnimationFrame(main);
}

function scoreTimer(){
    if(gameOver == false){
        score++;
        //console.log(score);
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }

        setTimeout(scoreTimer,1000);
    }
}
//scoreTimer();

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}
function drawback(){
    context.drawImage(back, 0, 0)
}
