import React from 'react';

export default class Atomic extends React.Component {
    render(){

        const {atomic} = this.props;

        return(
            <div>
                <h1>{atomic.id}</h1>
                <p>{atomic.description}</p>
            </div>
        );
    }
}