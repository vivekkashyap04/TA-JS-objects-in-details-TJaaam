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
if(index === obj.correctAnswer){
return true;
}else{
return false;
}
},
getCorrectAnswer(){
return obj.arr[obj.correctAnswer];
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
  };
  return obj;
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
  };
  return obj;
}

const firstQuestion = quiz("Where is the capital of Jordan",["Tashkent", "Amaan", "Kuwait City", "Nairobi"],1);

const secondQuestion = quiz("Where is the capital of India",["Mumabai", "Kolkata", "Delhi", "Cheenai"],2);