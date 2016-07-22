/**
 * Created by arnold on 7/22/2016.
 */
import React from 'react';

import CheckBox from './CheckBoxComponent';

export default class CheckList extends React.Component{

    constructor(){
        super();
this.changeCheckState=this.changeCheckState.bind(this);

    }

changeCheckState(optionIndex){
    this.props.changeCheckState(optionIndex);

}

    render(){


        const CheckBoxArray = this.props.question.options.map((option,index) => {
            return <CheckBox handleClick={this.changeCheckState} key={index} index={index} optionName={option}/>;
        });

        return(
            <div  className="portlet-body form">

                <div className="row">
                    <div className="col-md-8 col-md-offset-4">
                        <div className="form-group">

                            <div className="checkbox-list">
                                {CheckBoxArray}

                            </div>
                        </div>

                    </div>
                </div>



            </div>
        );



    }





}