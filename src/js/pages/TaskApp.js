/**
 * Created by arnold on 7/20/2016.
 */
import React from "react";
import ToDoList from "../components/ToDoAppComponents/ToDoList";

import InputBox from "../components/ToDoAppComponents/InputBox";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default  class App extends React.Component{
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        };
    }

    componentWillMount() {
        TodoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
    }

    //bring data

    getTodos() {

        this.setState({
            todos: TodoStore.getAll(),
        });
    }

//change items state to completed
    changeTodo(id){
        TodoActions.changeTodo(id);
    }

    //refreshes todo
    reloadTodos() {
        TodoActions.reloadTodos();
    }
    //creates a new todo item
    createTodo(todo){
        TodoActions.createTodo(todo);
    }
    //deletes  a todo item
    deleteTodo(id){
        TodoActions.deleteTodo(id);
    }

    render(){
        return(

        <div className="col-md-12">

            <div className="todo-content">
                <div className="portlet light ">

                    <div className="portlet-title">
                        <div className="caption">
                            <i className="icon-bar-chart font-green-sharp hide"/>

                            <span className="caption-subject font-green-sharp bold uppercase">Task APP</span>
                        </div>

                    </div>

                    <div className="portlet-body">
                        <div className="row">

                            <InputBox createTodo={this.createTodo}/>


                            <div className="todo-tasklist-devider"> </div>
                           <ToDoList changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} todos={this.state.todos}/>


                        </div>
                    </div>


                </div>
            </div>
        </div>


        );
    }
}