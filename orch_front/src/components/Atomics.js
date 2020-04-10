import React, { Component } from 'react';

import Atomic from './Atomic';

class Atomics extends Component {
    render() {
        return this.props.atomics.map(atomic => <Atomic atomic = {atomic} key={atomic._id}/>);
    }
}

export default Atomics;