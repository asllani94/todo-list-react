import React from 'react';



export default class Button extends React.Component{
constructor(){
    super();

this.handleClick=this.handleClick.bind(this);

}

handleClick(){

    this.props.getQuestion();
}


render(){

    return (
        <a  onClick={this.handleClick} className={"btn default button-"+this.props.type}>
            <i className={"fa "+this.props.faIcon}/> {this.props.text} </a>
    );
}

}