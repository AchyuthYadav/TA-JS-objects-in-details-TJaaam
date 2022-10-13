// For single question we need the following data and methods


// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)

// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

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

