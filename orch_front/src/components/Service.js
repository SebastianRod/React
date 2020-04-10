import React, {Component} from 'react';

export default class Service extends Component {
    render(){
        const {servicio} = this.props;

        return(
            <div>
                <h1>{servicio.id}</h1>
                <p>{servicio.Description}</p>
            </div>
        );
    }
}