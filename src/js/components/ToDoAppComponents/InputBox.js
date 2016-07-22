import React from "react";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';


var options = [
    { value: 'Very Important', label: 'Very Important' },
    { value: 'Important', label: 'Important' },
    { value: 'Normal', label: 'Normal' },
    { value: 'Not Important', label: 'Not Important' }
    ]

;

export  default class InputBox extends React.Component{
    constructor(){
        super();

        this.handleButtonPressed=this.handleButtonPressed.bind(this);

        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeDesc=this.handleChangeDesc.bind(this);
        this.handleChangeDate=this.handleChangeDate.bind(this);
        this.handleChangeType=this.handleChangeType.bind(this);
        this.handleCancel=this.handleCancel.bind(this);

        this.handleClick=this.handleClick.bind(this);

        this.state={title:"",description:"",date: moment(),type:""};
    }




    handleChangeTitle(evt) {
        this.setState({title: evt.target.value,description:this.state.description,date:this.state.date,type:this.state.type});
        console.log(evt.target.value);

    }
    handleChangeDesc(evt) {
        this.setState({description: evt.target.value,title:this.state.title,date:this.state.date,type:this.state.type});
        console.log(evt.target.value);

    }
    handleChangeDate(val) {
        this.setState({date: val,title:this.state.title,description:this.state.description,type:this.state.type});

    }
    handleChangeType(val) {

        this.setState({type: val.value,title:this.state.title,description:this.state.description,date:this.state.date});
        console.log(val.value);
    }

    handleButtonPressed(evt){
        if(evt.keyCode==13){
           this.handleClick();

        }
    }
    handleClick(){
        const id = Date.now();
       const todo={title:this.state.title,description:this.state.description,date:this.state.date.format("DD/MM/YYYY"),type:this.state.type,id:id,complete:false};
        console.log(todo);
        this.props.createTodo(todo);

        this.setState({title:"",description:"",date: moment(),type:""});

    }
    handleCancel(){
        this.setState({title:"",description:"",date: moment(),type:""});
    }

    render(){
       return (
           <div className="col-md-7 col-sm-8 col collapse in">
               <form  onKeyDown={this.handleButtonPressed} className="form-horizontal">

                   <div action="#" className="form">
                       <div className="form-group">
                           <div className="col-md-7 col-sm-7">
                             <h1 className="page-title text-right">TASK APP</h1>
                           </div>

                       </div>

                       <div className="form-group">
                           <div className="col-md-12">
                               <input  onChange={this.handleChangeTitle}  value={this.state.title} type="text" className="form-control todo-taskbody-tasktitle" placeholder="Task Title..."/> </div>
                       </div>

                       <div className="form-group">
                           <div className="col-md-12">
                               <textarea onChange={this.handleChangeDesc} value={this.state.description} className="form-control todo-taskbody-taskdesc" rows="8" placeholder="Task Description..."/>
                           </div>
                       </div>

                       <div className="form-group">
                           <div className="col-md-12">
                               <DatePicker
                                   selected={this.state.date}
                                   onChange={this.handleChangeDate} />

                       </div>
                           </div>

                       <div className="form-group">
                           <div className="col-md-12">
                               <Select

                                    value={this.state.type}
                                   options={options}
                                   onChange={this.handleChangeType}
                                   autoload={false}
                               />
                           </div>
                       </div>

                       <div className="form-actions right todo-form-actions">
                           <button onClick={this.handleClick} className="btn btn-circle btn-sm green">Add New</button>
                           <button onClick={this.handleCancel}className="btn btn-circle btn-sm btn-default">Clear</button>
                       </div>

                   </div>
               </form>
           </div>



       );
    }


}