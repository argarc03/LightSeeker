// Seguramente hay que cambiarle el formato al texto dependiendo del estado del boton.
class Button {
    constructor(text, posX, posY, quietImage, hoverImage,clickImage, disClickImage, action){
        this.text = text;
        this.x = posX;
        this.y = posY;
        this.quietImage = quietImage;
        this.hoverImage = hoverImage;
        this.clickImage = clickImage;
        this.disClickImage = disClickImage;
        this.action = action;
    }
}

class timerButton extends Button {
    constructor() {
        
    }
}