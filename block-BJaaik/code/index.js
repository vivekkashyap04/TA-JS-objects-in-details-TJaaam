class Person{
    constructor(name,age,gender){
        this.name =name;
        this.age =age;
        this.gender = gender;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
     console.log("sleep");
    }
    walk(){
      console.log("walk");
    }
}
class Players extends Person{
    constructor(sportsName,name,age,gender){
        super(name,age,gender);
         this.sportsName = sportsName;
    }
    play(){
        return `${this.name} play ${this.sportsName}`;
    }
}

class Teacher extends Person{
    constructor(instituteName,name,age,gender){
        super(name,age,gender);
        this.instituteName = instituteName;
    }
    teach(){
        return `${this.name} teaches in ${this.instituteName}`;
    }
}
class Artist extends Person{
    constructor(kind,name,age,gender){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        return `${this.name} is artist of ${this.kind}`;
    }
}

class Cricketer extends Players{
    constructor(teamName,sportsName,name,age,gender){
        super(name,age,gender,sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        return `${this.name} is play cricket in ${this.teamName}`
    }
}