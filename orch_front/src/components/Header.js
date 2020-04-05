import React from 'react';
//import Init from '../db/findConstants';

var GetConstant = require('../db/findConstants');

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            constante : GetConstant
        };
    }

    render(){
        return(
            <div>
                <h1>Llegamos</h1>
                <h1>
                {this.state.constante}
                </h1>
            </div> 
        )
    }
}