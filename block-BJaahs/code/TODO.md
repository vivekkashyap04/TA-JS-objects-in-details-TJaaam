If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
- Organize using object
- Use a function to create object
- Convert the function to use `this` keyword
- Write test by creating two objects also test both methods.

### To test use the following data

let title = "where is the capital of India";
let arr = ["mumbai","kolkata","delhi","cheenai"];
let correctAnswer = 2;
function isAnswerCorrect(index){
if(index === correctAnswer){
return true;
}else{
return false;
}
}

function getCorrectAnswer(){
return arr[correctAnswer];
}

let obj = {
title:"where is the capital of India",
arr:["mumbai","kolkata","delhi","cheenai"],
correctAnswer:2,
isAnswerCorrect(index){
if(index === correctAnswer){
return true;
}else{
return false;
}
},
getCorrectAnswer(){
return arr[correctAnswer];
}
}

function quiz(title,arr,correctAnswer){
  let obj = {};
  obj.title = title;
  obj.arr = arr;
  obj.correctAnswer = correctAnswer;
  obj.isAnswerCorrect = function(index){
    if(index === obj.correctAnswer){
return true;
}else{
return false;
}
  };
  obj.getCorrectAnswer = function(){
    return obj.arr[obj.correctAnswer];
  }
}

function quiz(title,arr,correctAnswer){
  let obj = {};
  obj.title = title;
  obj.arr = arr;
  obj.correctAnswer = correctAnswer;
  obj.isAnswerCorrect = function(index){
    if(index === this.correctAnswer){
return true;
}else{
return false;
}
  };
  obj.getCorrectAnswer = function(){
    return this.arr[this.correctAnswer];
  }
}

```js
const testData = {
  title: "Where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
};
```
