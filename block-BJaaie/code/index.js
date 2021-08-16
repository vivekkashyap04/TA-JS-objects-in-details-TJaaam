function CreateAnimal(location,noOflegs){     
      this.location =location;
      this.noOflegs = noOflegs;
}

createAnimal.prototype = {
    eat:function(){
       console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation:function(newLocation){
             this.location = newLocation;
             return this.location;
    },
    summary:function(){
       console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}


function CreateDog(location,noOflegs,name,color){
        createAnimal.call(this,location,noOflegs);
        this.name =name;
        this.color = color;
}

CreateDog.prototype = {
    bark () {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName) {
        this.name =  newName;
    },
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }, 
    summary() {
         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(CreateDog.prototype,createAnimal.prototype);


//cat
function CreateCat(location,noOflegs,name,colorOfEyes){
    createAnimal.apply(this,[location,noOflegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
    meow:function(){
      alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName:function(changeName){
         this.name = changeName;
         return this.name;
    },
    changeColorOfEyes(newColor){
           this.colorOfEyes = newColor;
           return this.colorOfEyes;
    },
    summary(){
        returns `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf(CreateCat.prototype,createAnimal.prototype);


// Class Pattern

class Animal{
    constructor(location,noOflegs){
        this.location =location;
        this.noOflegs = noOflegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
     }
     changeLocation(newLocation){
              this.location = newLocation;
              return this.location;
     }
     summary(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
     }
}

class Dog extends Animal{
    constructor(location,noOflegs,name,color){
       super(location,noOflegs);
       this.name = name;
       this.color = color;
    }
    bark () {
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName) {
        this.name =  newName;
    }
    changeColor(newColor) {
        this.color = newColor;
        return this.color;
    }
    summary() {
         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

class Cat extends Animal{
    constructor(location,noOflegs,name,colorOfEyes){
        super(location,noOflegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
      }
      changeName(changeName) {
           this.name = changeName;
           return this.name;
      }
      changeColorOfEyes(newColor) {
             this.colorOfEyes = newColor;
             return this.colorOfEyes;
      }
      summary() {
          returns `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
      }
}