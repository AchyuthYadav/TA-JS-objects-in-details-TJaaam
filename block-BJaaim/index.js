let form=document.querySelector(".form");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let quizElm=document.querySelector(".quiz");
let showResult=document.querySelector(".show_result");
let totalQuestion=document.querySelector('header p')
let form=document.querySelector(".form");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let quizElm=document.querySelector(".quiz");
let showResult=document.querySelector(".show_result");
let totalQuestion=document.querySelector('header p')


class Quiz{
    constructor(questions =[], score = 0){
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
    }
    incrementScore(){
        this.score = this.score + 1;
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1;
        this.createUI();
    }

    prevQuestion(){
        this.activeIndex = this.activeIndex - 1;
        this.createUI();
    }
}