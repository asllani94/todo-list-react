/**
 * Created by arnold on 7/22/2016.
 */
import React from 'react';


export default class CheckBox extends React.Component{
    constructor(){
        super();

    this.handleClick=this.handleClick.bind(this);
    }

    handleClick(evt){
        var index=evt.target.id;

        this.props.handleClick(index);

    }

    render(){
    const index=this.props.index;
        return(
            <div className="checkbox">
            <label >
                <input  onClick={this.handleClick} id={index} type="checkbox" /> <span>{this.props.optionName}</span>
            </label>
            </div>

    );
    }
}