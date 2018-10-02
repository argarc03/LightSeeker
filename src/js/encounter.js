class Day {
    constructor(title,posTitleX,posTitleY,background){

    }
}

class DayZero extends Day {
    constructor(){
        super('title',0,0,'imagenPredefinida');
        this.buttons = [];
    }
}

class TextEvent extends Day {
    constructor(title, text, image ,options)
    {
        super(title,0,0,'imagenPredefinida')
        this.text = text;
        this.image = image;
        this.options=options;
    }
}

class Option {
    constructor(text, results, probabilities) {

    }
}
