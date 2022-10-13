

class Person {
    constructor(name, age, gender){

        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat() {
        console.log(`${this.name} can eat!`);
    }
    sleep() {
        console.log(`${this.name} can sleep`);
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}    


class Player extends Person{
    constructor(name, age, gender, sportsName){
        super(name, age, gender);
        this.sportsName=sportsName;
    }
    play() {
        console.log('${this.name} can play!');
    }
}

class Teacher extends Person{
    constructor(name, age, gender, instituteName){
        super(name, age, gender);
        this.instituteName=instituteName;
    }
    tech() {
        console.log('${this.name} can tech!');
    }
}

class Artist extends Person{
    constructor(name, age, gender, kind){
        super(name, age, gender);
        this.kind=kind;
    }
    createArt() {
        console.log('${this.name} can create art of ${this.kind}');
    }
}


class Cricketer extends Person{
    constructor(name, age, gender, sportsName){
        super(name, age, gender);
        this.kind=kind;
    }
    createArt() {
        console.log('${this.name} can play cricket');
    }
}

    class Cricketer extends Person{
    constructor(name, age, gender, sportsName, teamName){
        super(name, age, gender);
        this.teamName=teamName;
    }
    createArt() {
        console.log('${this.name} can play cricket');
    }

}
