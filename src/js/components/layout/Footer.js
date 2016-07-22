import React from "react";


export default class Footer extends React.Component {
  render() {


    return (
     
        <div className="page-footer">
            <div className="page-footer-inner"> 2014 &copy; {this.props.companyName}.
                <a href={this.props.companyUrl}  target="_blank">{this.props.companyMessage}</a>
            </div>
            <div className="scroll-to-top">
                <i className="icon-arrow-up"/>
            </div>
        </div>
       
    );
  }
}
