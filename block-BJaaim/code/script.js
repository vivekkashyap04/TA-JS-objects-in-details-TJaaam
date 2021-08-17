/*
We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

1. Quiz is a collection of Questions.
2. Question will need `Title`, `Options` and `Correct Answer`

### Make a Question class with these data and methods:

DATA:

- Title of the question
- Options of the question
- Correct answer

METHODS:

- isCorrect(answer)

Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

- getCorrectAnswer()
  This method will return the correct answer of the question.

- createUI (this will create the layout of a single question)

This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

class Question {
    constructor(title,options,correctAnswer){
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer){
        return this.correctAnswer === answer;
    }
    getCorrectAnswer(){
        return this.correctAnswer;
    }
    createUI(){
        let li = document.createElement('li');
        let title = document.createElement('h3');
        title.innerText = this.title;
        let option1 = document.createElement("input");
        option1.type = "radio";
        option1.value = this.options[0];
        let label1 = document.createElement("label");
        label1.innerText = this.options[0];
        let option2 = document.createElement("input");
        option2.type = "radio";
        option2.value = this.options[1];
        let label2 = document.createElement("label");
        label2.innerText = this.options[1];
        li.append(title,option1,label1,option2,label2);
        return li;
    }
}
*/
/*
### Make quiz class with these data and properties

DATA:

- allQuestions
  Collection of Questions. An array with multiple question.
- activeIndex
  Index of the active visible question
- score
  Total number of correct answer

METHOD:

- nextQuestion()
  This method should get the next question.
- createUI
  This will create the ui of the whole app.
- updateScore
  This method will update the score.


class Quiz{
    constructor(question = [],score = 0){
         this.allQuestion = question;
         this.score = score;
         this.activeIndex = 0
    }
    add(title,options,correctAnswer){
        let question = new Question(title,options,correctAnswer);
        this.allQuestion.push(question);
    }
    nextQuestion(){
        this.activeIndex +=1;
    }
}
*/
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let quizElm = document.querySelector(".quiz");

let totalQuestions = document.querySelector(".total");

let showResult =  document.querySelector(".show-result");


class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer) {
        return answer === this.options[this.correctAnswerIndex];
    }
    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex];
    }
}

class Quiz {
    constructor(questions = [], score = 0) {
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
    }

    incrementScore() {
        this.score += 1;
    }
    nextQuestion() {
        this.activeIndex += 1;
        this.createUI();
    }
    prevQuestion() {
        this.activeIndex -= 1;
        this.createUI();

    }

    addQuestion(title, options, answerIndex) {
        let question = new Question(title, options, answerIndex); 
        this.questions.push(question);
    }

    handleButtons() {
        if (this.activeIndex === 0) {
            prev.style.display = "none";
            showResult.style.display = "none";
        } else if(this.activeIndex === (this.questions.length - 1)) {
            next.style.display = "none";
            showResult.style.display = "inline-block";
            
        } else {
            next.style.display ="inline-block";
            prev.style.display = "inline-block";
        }

    }

    createUI() {
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
       let form = document.createElement("form");
       let fieldset = document.createElement("fieldset");
       let legend = document.createElement("legend");
       legend.classList.add("question");

       legend.innerText = `Question No ${this.activeIndex + 1 }: ${activeQuestion.title}`;

       let optionsElm = document.createElement("div");
       optionsElm.classList.add("options");

       let buttonWrapper = document.createElement("div");

       buttonWrapper.classList.add("button-wrapper");
       let button = document.createElement("button");
       button.type = "submit";
       button.innerText = "Submit";
       buttonWrapper.append(button);

        activeQuestion.options.forEach((option, index) => {
            let optionContainer = document.createElement("div");
            optionContainer.classList.add("options-container");

            let input = document.createElement("input");
            input.id = `option-${index}`;
            input.type = "radio";
            input.name = "options";
            input.value = option;
            let label = document.createElement("label");
            label.for = `option-${index}`;
            label.innerText = option;

            form.addEventListener("submit", (event) =>  {
                event.preventDefault();
                if(input.checked) {
                    if (this.activeIndex !== (this.questions.length -1)) {
                        this.nextQuestion();
                    } else {
                        alert(`You have Finshed the quiz! Chcek your reselt.`);
                    }
                    activeQuestion.getCorrectAnswer();
                    if(activeQuestion.isCorrect(input.value)) {
                        this.incrementScore();
                    } else {
                        alert(`The Correct Answer is ${activeQuestion.getCorrectAnswer()}`)
                    }

                }
            });
            optionContainer.append(input, label);
            optionsElm.append(optionContainer);
        });

        this.handleButtons();
        totalQuestions.innerText = `Total Questions: ${this.questions.length}`; 

       fieldset.append(legend, optionsElm, buttonWrapper);
       form.append(fieldset);
       quizElm.append(form);
    }
}

function init () {
    let quiz =  new Quiz();

questionnire.forEach(question => {
    quiz.addQuestion(question.title, question.options, question.answerIndex);
});

quiz.createUI();

next.addEventListener("click", quiz.nextQuestion.bind(quiz));

prev.addEventListener("click", quiz.prevQuestion.bind(quiz));

showResult.addEventListener("click", () => {
    alert(`Your Score is ${quiz.score}`);
});
}

init();