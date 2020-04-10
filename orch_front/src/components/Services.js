import React, {Component} from 'react';

import Service from './Service';

export default class Services extends Component {
    render(){
        return (
            this.props.services.map(service => <Service servicio = {service} key = {service._id}/>)
        );
    }
}