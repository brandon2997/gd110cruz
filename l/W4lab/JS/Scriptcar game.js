//JavaScript goes here//

var C = document.querySelector('canvas');
var ctx = C.getContext('2d')
var mario = new Image()
mario.src = 'images/mairo.png'
var timer = requestAnimationFrame(draw)
var x = 0
var start = 105
var finsh = 700
var startfuel = 600
var fuel = startfuel
var barfullwidth = 300
var seconds = 3
var fps = 60
var frames = fps
function draw() {
    timer = requestAnimationFrame(draw)
    ctx.clearRect(0, 0, C.width, C.height)

    if (seconds > 0) {
        runStartTimer()
        drawStartTimer()
    }
    else {
        if (fuel > 0) {
            x += 1
            fuel -= 1
        }
    }

    if (x > C.width) {
        x = -200
    }

    ctx.lineWidth = 1
    ctx.fillStyle = 'black'
    ctx.font = "50px Arial"
    ctx.textAlign = "center"
    ctx.fillText("week 4 lab", C.width / 2, 50)
    ctx.strokeText("week 4 lab", C.width / 2, 50)

    drawpsrite()
    drawStartLine()
    drawfinshLine()
    drawCar()
    drawFuelbar()
    drawFueltext()
    if (fuel <= 0 || x + 100 > finsh) {
        drawResults()
    }


}

function runStartTimer() {
    frames -= 1
    if(frames < 0){
        frames = fps
        seconds -=1
    }
}
function drawStartTimer() {
    ctx.fillStyle = 'white'
    ctx.font = "30px Arial"
    textAlign = "center"
    ctx.fillText(seconds, C.width / 2, C.height / 2)
}
function drawCar() {
    ctx.fillStyle = 'white'
    ctx.fillRect(x, C.height / 2, 100, 50)

}
function drawStartLine() {
    ctx.fillStyle = 'black'
    ctx.fillRect(start, 100, 10, 400)
}
function drawfinshLine() {
    ctx.fillStyle = 'purple'
    ctx.fillRect(finsh, 100, 10, 400)
}
function drawFuelbar() {
    var currentBarwidth = barfullwidth * getfuelpercent()
    ctx.fillStyle = 'brown'
    ctx.fillRect(start, 80, currentBarwidth, 20)
}
function drawFueltext() {
    ctx.fillStyle = 'white'
    ctx.font = "30px Arial"
    ctx.fillText(fuel.toFixed(0), start, 45)
}
function getfuelpercent() {
    return fuel / startfuel;
}
function drawResults() {
    if (x + 100 > finsh) {
        ctx.fillStyle = 'white'
        ctx.font = "30px Arial"
        textAlign = "center"
        ctx.fillText('you win', C.width / 2, C.height / 2)
    }
    else {
        ctx.fillStyle = 'white'
        ctx.font = "30px Arial"
        textAlign = "center"
        ctx.fillText('you lose', C.width / 2, C.height / 2)
    }
}
function drawpsrite(){
    ctx.drawImage(mario, x, 0, 200, 200)
}