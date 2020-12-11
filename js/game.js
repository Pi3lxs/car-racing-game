class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",(data)=>{
            gameState = data.val()
        }) 
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        
        if (gameState===0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        car1.addImage(car1IMG)
        car2.addImage(car2IMG)
        car3.addImage(car3IMG)
        car4.addImage(car4IMG)
        cars = [car1,car2,car3,car4]
    }
    play(){
        form.hide()
        //textSize(27)
        //text("game starts soon",130,30)
        Player.getPlayerInfo()
        player.getCarsAtEnd()
        image (track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var y = 0
        if(allPlayers!==undefined){
            //var displayPosition=120
            var index = 0
            var x = 175
            for(var plr in allPlayers){
                //displayPosition += 20
                //textSize(15)
                //text(allPlayers[plr].name+" ; "+allPlayers[plr].distance,150,displayPosition)
                index = index +1
                x = x+200
                y = displayHeight -allPlayers[plr].distance
                cars [index -1].x=x
                cars[index -1].y=y
                if(index===player.index){
                   fill("yellow")
                   ellipse(x,y,70,70)
                    camera.position.x=displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=20
            player.update()
        }
        if(player.distance>4200){
            gameState = 2
            player.rank = player.rank+1
            Player.updateCarsAtEnd(player.rank)
            textSize(50)
            fill("black");
            text("your rank is "+player.rank,displayWidth/2,y - 200)
        }
        drawSprites();
    }
    end(){
        console.log("gameEnded"+player.rank)
        
        text("Game Over",displayWidth/2,displayHeight/2)
    }
}
