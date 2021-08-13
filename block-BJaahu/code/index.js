//Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
  let questionMethods = {
  isAnswerCorrect: function(index){
  return index === this.correctAnswerIndex;
  },
  getCorrectAnswer: function(){
  return this.options[this.getCorrectAnswer];
  }
  }
  
  function question(title,options,correctAnswerIndex){
  let obj = Object.create(questionMethods);
  obj.title = title;
  obj.options = options;
  obj.correctAnswerIndex = correctAnswerIndex;
  
  return obj;
  }

//Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

function question(title,options,correctAnswerIndex){
    let obj = Object.create(Question.prototype);
    obj.title = title;
    obj.options = options;
    obj.correctAnswerIndex = correctAnswerIndex;
    
    return obj;
    }

question.prototype = {
    isAnswerCorrect: function(index){
        return index === this.correctAnswerIndex;
        },
        getCorrectAnswer: function(){
        return this.options[this.getCorrectAnswer];
        }
}   

//Create using class
class Question{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex =correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
        }
    getCorrectAnswer(){
        return this.options[this.getCorrectAnswer];
        }

}

  let firstQuestion = new Question(
    "Where is the capital of Jordan",
    ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
    1
  );
  let secondQuestion = new Question(
    "Where is the capital of Jamaica",
    ["Tashkent", "Amaan", "Kingston", "Nairobi"],
    2
  );
  