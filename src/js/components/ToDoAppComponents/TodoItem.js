import React from "react";



export default class Todo extends React.Component {
  constructor(props) {
    super();
        this.handleDeleteButton=this.handleDeleteButton.bind(this);
        this.handleDoneButton=this.handleDoneButton.bind(this);
  }

  //event handler for Delete button
  handleDeleteButton(event){
      var id=event.target.id;

      //calls method that is passed from parent
      this.props.deleteTodo(id);
  }

  //event handler for Done button

  handleDoneButton(event){
      var id=event.target.id;

      //calls method that is passed from parent
      this.props.changeTodo(id);
  }



  render() {
      //Extract data passed from the parent item (ToDoList)
    var {type,date,title,description, complete,id} = this.props;


      //variables needed to customize item according to its properties
      var textStyle= <p>{description}</p>;
      var borderColor="";
      var badgeColor="";


      //generates Done button
      var doneButton=  <a onClick={this.handleDoneButton} className="btn btn-sm green"> <span id={id}>Done </span>
          <i className="fa fa-check"/>
      </a>;


      //cbeck if item is completed (finished)
      if(complete){
          //change textStyle to line-throught
        textStyle=<p> <del>{description} </del> </p>;
        //change border color to grey
           borderColor="grey";
          //change badge color to success
        badgeColor="badge badge-success badge-roundless";

          //Now that is finished new Type can be Finished
          type="Finished";

          //hide Done button
          doneButton="";

    }

    else{
        switch (type){
            case "Very Important" :{
                borderColor="red";
                badgeColor="badge badge-danger badge-roundless"
                break;
            }
            case "Important" :{
                borderColor="yellow";
                badgeColor="badge badge-warning badge-roundless"
                break;
            }
            case "Normal" :{
                borderColor="blue";
                badgeColor="badge badge-primary badge-roundless"
                break;
            }
            case "Not Important" :{
                borderColor="green";
                badgeColor="badge badge-info badge-roundless"
                break;
            }

        }


    }




    return (


       <div className={"todo-tasklist-item todo-tasklist-item-border-"+borderColor}>
          <img className="todo-userpic pull-left" src="assets/img/avatar.jpg" width="27px" height="27px"/>
          <div id={id} className="todo-tasklist-item-title"> {title} </div>
           <div className="todo-tasklist-item-text"> {textStyle}</div>
           <div className="todo-tasklist-controls pull-left">
               <span className="todo-tasklist-date">
                   <i className="fa fa-calendar"/>{date} </span>
          <span className={"todo-tasklist-badge "+badgeColor}>{type}</span>
           </div>

           <div className="todo-tasklist-controls pull-right">
               <div className="btn-toolbar">

               {doneButton}
               <a  onClick={this.handleDeleteButton} className="btn btn-sm red"> <span id={id}>Delete </span>
                   <i className="fa fa-trash"/>
               </a>
                   </div>
           </div>
       </div>

    );
  }
}
