import React from "react";

import * as SurveyActions from "../actions/surveyActions";
import SurveyStore from "../stores/SurveyStore";
import CheckList from "../components/SurveyAppComponents/CheckListComponent";
import Button from "../components/SurveyAppComponents/ButtonComponent";

export default class Menu1 extends React.Component {
    constructor() {
        super();
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.changeCheckState=this.changeCheckState.bind(this);
        this.state = {
            question: SurveyStore.nextQuestion(),
            selected:[false,false,false,false],
        }

    }


    changeCheckState(index){
        var arr=this.state.selected;
        arr[index]=!arr[index];
        console.log(arr[index]);
        this.setState({
            selected: arr
        });
    }

    nextQuestion() {

            this.setState({

                question: SurveyStore.nextQuestion()
            });
        }


    previousQuestion(){

        this.setState({

            question: SurveyStore.previousQuestion()
        });


    }




    render() {
        if(this.state.question!=null) {
            return (
                <div className="row">
                    <div className="portlet light bordered">
                        <div className="portlet-title">
                            <div className="caption">
                                <i className=" icon-layers font-red"/>
                                <span className="caption-subject font-red bold uppercase aling-center push-left"> Survey App

                                        </span>
                            </div>

                        </div>
                        <div className="portlet-body form">
                            <div className="row">
                                <div className=" col-md-4 col-md-offset-4">
                                    <h1> {this.state.question.title}</h1>
                                </div>
                            </div>
                            <div className="todo-tasklist-devider"></div>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="portlet light bordered">
                                        <CheckList changeCheckState={this.changeCheckState}
                                                   question={this.state.question}/>

                                        <div className="form-actions">
                                            <div className="row">
                                                <div className="col-md-offset-3 col-md-9">
                                                    <Button getQuestion={this.previousQuestion} type={"previous"}
                                                            faIcon={"fa-angle-left"} text={"Back"}/>
                                                    <Button getQuestion={this.nextQuestion} type={"next"}
                                                            faIcon={"fa-angle-right"} text={"Next"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else return <h1>NO BACK</h1>;
  }
}
