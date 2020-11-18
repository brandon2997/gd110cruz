
var c = document.querySelector('canvas')
var ctx = c.getContext('2d')

var rps = [];
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"

var btn = document.querySelectorAll('a')
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

btn[0].addEventListener( 'click', function(e){
    play(0)
})
btn[1].addEventListener( 'click', function(e){
    play(1)
})
btn[2].addEventListener( 'click', function(e){
    play(2)
})

    function play (pChoice){
        ctx.clearRect(0,0, c.width,c.height)
        var cChoice = Math.floor(Math.random()*2.999999)

        ctx.fillstyle = "red"
        ctx.font = "40px Arial"
        ctx.textAlign = "center"
        ctx.fillText("player's choice:" + rps[pChoice] + " computer choice:" + rps[cChoice], c.width/2 , c.height/2) 


switch(pChoice){
            case 0:
                if(cChoice === 0){
                ctx.fillText('You TIED', c.width/2, c.height/2 + 100)
       }
    else if(cChoice === 1)
    {
        ctx.fillText('you LOST', c.width/2, c.height/2 + 100)
    }
    else
    {
        ctx.fillText('You WIN', c.width/2, c.height/2 + 100)
    } 
    break;
            case 1:
                if(cChoice === 0){
                ctx.fillText('You WIN', c.width/2, c.height/2 + 100)
       }
    else if(cChoice === 1)
    {
        ctx.fillText('you TIED', c.width/2, c.height/2 + 100)
    }
    else
    {
        ctx.fillText('You LOST', c.width/2, c.height/2 + 100)
    } 
    break;
            case 2:
                if(cChoice === 0){
                ctx.fillText('You LOST', c.width/2, c.height/2 + 100)
       }
    else if(cChoice === 1)
    {
        ctx.fillText('you WIN', c.width/2, c.height/2 + 100)
    }
    else
    {
        ctx.fillText('You TIED', c.width/2, c.height/2 + 100)
    } 
    break;

}
}