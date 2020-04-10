import React from 'react';
import './css/App.css';

import atomics from './data/Atomics.json';
import services from './data/Services.json';

import Atomics from './components/Atomics';
import Services from './components/Services';
import Title from './components/Title';
import Dashboard from './components/front_v2/Dashboard';


class App extends React.Component {

  state = {
    atomics : atomics,
    services : services
  }

  render() {
    return( 
      <div>
        <Dashboard/>
      </div>
    );
  }
}


export default App;
