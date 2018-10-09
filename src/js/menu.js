'use strict'

class Menu {
    constructor(title, posX, posY, image) {
        this.title = title;
        this.x = posX;
        this.y = posY;
        this.image = image;
    };
}

class pauseMenu extends Menu {
    constructor(title, posX, posY, image, resumeButton, backToMainMenuButton) {
        super(title, posX, posY, image);
        this.resumeButton = resumeButton;
        this.backToMainMenuButton = backToMainMenuButton;
    }


}

class exitMenu extends Menu {
    constructor(title, posX, posY, image, question, yesButton, noButton) {
        super(title, posX, posY, image);
        this.question = question;
        this.yesButton = yesButton;
        this.noButton = noButton;
    }


}