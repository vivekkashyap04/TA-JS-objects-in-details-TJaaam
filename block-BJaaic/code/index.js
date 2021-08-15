//# Inheritance

//Convert the below requirements into inheritance using prototypal patters.

//#### Animal

/*Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`
*/
let animalMethod = {
     eat: function(){
         console.log(`I live in ${this.location} and I can eat`);
     },
     changeLocation:function(newLocation){
         this.location = newLocation
         return this.location;
     },
     summary:function(){
         return `I live in ${this.location} and I have ${numberOfLegs}`;
     }
}
function animal(location,numberOfLegs){
    let details = Object.create(animalMethod);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    return details;
}

/*
#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`
*/
let dogMethod = {
    bark: function(){
        alert(`I am ${this.name} and I can bark`)
    },
    changeName:function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor:function(newColor){
            this.color = newColor;
            return this.color;
    },
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color.I can also bark`;
    }
}
Object.setPrototypeOf(dogMethod, animalMethod);

function dog(location,numberOfLegs,name,color){
   let details = Object.create(dogMethod);
   this.name = name;
   this.color =color;
   this.location = location;
   this.numberOfLegs = numberOfLegs;
   return details;
}
/*
#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
*/
let catMethod = {
    meow: function(){
        alert(`I am ${this.name} and I can do meow meow`)
    },
    changeName:function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor:function(newColor){
            this.color = newColor;
            return this.color;
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes ${this.colorOfEyes} color.I can also do meow meow`;
    }
}
Object.setPrototypeOf(catMethod, animalMethod);

function cat(location,numberOfLegs,name,colorOfEyes){
   let details = Object.create(catMethod);
   this.name = name;
   this.color =colorOfEyes;
   this.location = location;
   this.numberOfLegs = numberOfLegs;
   return details;
}