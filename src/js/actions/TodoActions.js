import dispatcher from "../dispatcher";

export function createTodo(todoItem) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    todoItem,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}


export  function changeTodo(id) {
dispatcher.dispatch({
  type: "CHANGE_TODO",
  id,
});
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })

    //get data from internet

  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        title: "Go Shopping Again",
        description:"asdnfaksdfas",
        date:"asdfsd",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}
