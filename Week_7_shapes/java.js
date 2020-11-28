var c = document.querySelector('canvas')
var ctx = c.getContext('2d')
function draw(){  
    ctx.fillStyle= 'yellow'
    ctx.fillRect(101,101,101,101)

    ctx.lineWidth= 5
    ctx.strokeStyle='red'
    ctx.moveTo(85,682)
    ctx.lineTo(279,550)
    ctx.stroke()


    
}
draw()
function circle(){
    ctx.strokeStyle= "yellow"
    ctx.fillStyle= "yellow"
    ctx.beginPath()
    ctx.arc(385,440, 65, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
}
circle()
function penta(){
    ctx.fillStyle='fuchsia'
    ctx.strokeStyle='fuchsia'
    ctx.beginPath()
    ctx.moveTo(557,308)
    ctx.lineTo(550,420)
    ctx.lineTo(650,465)
    ctx.lineTo(725,380)
    ctx.lineTo(668,285)
    ctx.closePath()
    ctx.stroke()
   
    ctx.fill()
}
penta()
function star(){
    ctx.fillStyle='yellow'
    ctx.strokeStyle='yellow'
    ctx.beginPath()
    ctx.moveTo(635,495)
    ctx.lineTo(666,555)
    ctx.lineTo(735,567)
    ctx.lineTo(688,615)
    ctx.lineTo(696,681)
    ctx.lineTo(636,653)
    ctx.lineTo(575,681)
    ctx.lineTo(583,615)
    ctx.lineTo(539,568)
    ctx.lineTo(605,555)
    
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
}
star()