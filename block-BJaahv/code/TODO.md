# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

// 1 Prototypal pattern of object creation ( Prototypal method )

let questionMethod = {
    isAnswercorrect: function(index){
        if(inderx === this.correctAnserIndex){
            return true;
        }
    else{
        return false;
    }
},
    getCorrectAnswer: function(){
        return this.correctAnswerIndex;
    }
    }
        function Question(title,options,correctAnswerIndex){
            let ques = Object.create(questionMethod);
            ques.title = title;
            ques.options = options;
            ques.correctAnswerIndex = correctAnswerIndex;
            return ques;
        }

// Pseudoclassical Pattern ( Pseudoclassical method )

question.prototype = {
    isAnswercorrect: function(index){
        if(inderx === this.correctAnserIndex){
            return true;
        }
    else{
        return false;
    }
},
    getCorrectAnswer: function(){
        return this.correctAnswerIndex;
    }
    }
        function Question(title,options,correctAnswerIndex){
        
            this.title = title;
            this.options = options;
            this.correctAnswerIndex = correctAnswerIndex;
            
        }

// class

class Question{
    constructor(title,options,correctAnswerIndex){
        
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    
}
    isAnswercorrect(){
        if(inderx === this.correctAnserIndex){
            return true;
        }
    else{
        return false;
    }
    }
    getCorrectAnswer(){
        return this.correctAnswerIndex;
    }
    }

