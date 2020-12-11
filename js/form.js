class Form{
    constructor(){
        this.title = createElement("h2")
        this.input = createInput().attribute('placeholder','enter name')
        this.button = createButton("start")
        this.greeting = createElement("h3")
        this.reset = createButton("Reset")
    }
    display(){
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-50,30)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth-100,100)
        this.reset.mousePressed(()=>{
            Player.updateCarsAtEnd(0)
            game.update(0)
            player.updateCount(0)
            Player.removePlayers();
            //game.start();
        })
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html('hello '+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    
}