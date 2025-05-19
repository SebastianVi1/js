class Animal {
    constructor(name, race){
        this.name = name;
        this.race = race;

    }

    talk(){} // Pollymorphism

    dance(){
        return 'The ${this.race} is dancing';
    }

    showName(){
        return 'My name is ${this.name}.';
    }
}

class Cats extends Animal {
    constructor(name, race, mustacheColor){
        super(name, race);
        this.mustacheColor = mustacheColor;
    }

    talk(){
        return "miau";
    }
}

const cat = new Cats('mishi', 'bengaly', 'white');

console.log(cat.talk);