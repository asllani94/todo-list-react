import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class surveyStore extends EventEmitter {
    constructor() {
        super();

        this.questions = [{
            title: "What is your favourite movie?",
            options: ["Inception", "Illusionist", "The Shawshek Redemption", "Lord of Rings"]
        },
            {
                title: "What do you do in free time?",
                options: ["travel", "sleep", "read book", "watch Tv"]
            },
            {
                title: "Are you happy with your social life?",
                options: ["I dont have a social life", "I am a home bird", "I am a party animal", "I dont know"]
            }
        ];
        this.stateArray = [];
        this.currentQuestion=0;
        this.wasNext=false;
        this.wasPrev=false;
    }


    nextQuestion(){

        if(this.currentQuestion<=this.getSize()-1) {
            if (this.wasPrev) {
                this.currentQuestion += 1;
                this.wasPrev = false;
            }
            var a = this.questions[this.currentQuestion];
            console.log("I am at question: " + this.currentQuestion);
            this.currentQuestion += 1;
            this.wasNext = true;
            return a;
        }
        else
            return this.previousQuestion();

    }
    previousQuestion(){

        if(this.currentQuestion>=0) {
            this.currentQuestion -= 1;
            if (this.wasNext) {
                this.currentQuestion -= 1;
                this.wasNext = false;
            }

            var a = this.questions[this.currentQuestion];
            this.wasPrev = true;
            console.log("I am at question: " + this.currentQuestion);
            return a;

        }
        else
            return this.nextQuestion();
    }


    saveAnswer(answerObject){

    }
    getSize(){
        return this.questions.length;
    }

    getResult(){

    }

    handleActions(action) {
        switch(action.type) {

            case "SAVE_ANSWER":{
                this.saveAnswer(action.answerObject);
                break;
            }
            case "GET_RESULT":{
                this.getResult();
                break;
            }
        }
    }



}


const SurveyStore = new surveyStore;
dispatcher.register(SurveyStore.handleActions.bind(SurveyStore));

export default SurveyStore;
