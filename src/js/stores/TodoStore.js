import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();


    this.todos =
[
      {
        id: 113464613,
        title: "Go Shopping",
        description:"You have to go shopping with your friend",
        date:"27/07/2016",
        complete: false,
          type:"Very Important"
      },
      {
        id: 235684679,
        title: "Last review of Project Documentation",
        description:"Have a look at the .doc file",
        date:"27/07/2016",
        complete: true,
        type:"Important"
      },
    ];




  }




  createTodo(todoItem) {

      this.todos.push(todoItem);


      this.emit("change");
  }

  changeTodo(id){
      for (var i in this.todos) {
      if(this.todos[i].id==id)
          this.todos[i].complete=!this.todos[i].complete;
      }


    this.emit("change");
  }
  deleteTodo(id){
      console.log("Im am id nr: "+id);
      for (var i in this.todos) {
          if(this.todos[i].id==id)
             this.todos.splice(i,1);
      }

      this.emit("change");
  }

  getAll() {
      return this.todos.sort(function (a, b) {

          var key1 = a.complete;
          var key2 = b.complete;
          if (key1 < key2) {
              return -1;
          } else if (key1 == key2) {

              return 0;
          } else {
              return 1;
          }
      });
  }



  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.todoItem);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      case "CHANGE_TODO":{
        this.changeTodo(action.id);
        break;
      }
        case "DELETE_TODO":{
            this.deleteTodo(action.id);
            break;
        }
    }
  }

}


const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
