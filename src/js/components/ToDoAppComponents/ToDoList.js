import React from "react";

import Todo from "./TodoItem";




export default class ToDoList extends React.Component {

  render() {

    //create an array of ToDoItems
    const TodoComponents = this.props.todos.map((todo) => {
        return <Todo  changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo} key={todo.id} {...todo}/>;
    });

    return (

        <div className="col-md-5 col-sm-4">
          <div className="todo-tasklist">
              {
                  //print out the array of ToDoItems
                  TodoComponents
              }

          </div>
        </div>



    );
  }
}
