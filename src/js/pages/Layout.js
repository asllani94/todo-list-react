import React from "react";

import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/Nav";

 /*require("../../assets/css/bootstrap.min.css");
 require("../../assets/css/darkblue.min.css");
 require("../../assets/css/layout.min.css");
 require("../../assets/css/components.min.css");
 require("../../assets/css/plugins.min.css");
 require("../../assets/css/react-datepicker.min.css");
 require("../../assets/css/react-select.min.css");
 require("../../assets/css/todo.min.css");
 require("../../assets/css/font-awesome-4.6.3/css/font-awesome.min.css");
*/

export default class Layout extends React.Component {
  render() {

      const { location } = this.props;
    return (


        <div >
            <div className="row">
            <NavBar location={location}/>
            </div>
            <div className="row">

            {this.props.children}



                </div>
            <Footer companyName="ENO" companyMessage=" Information Technologies"/>
        </div>
    );
  }
}
