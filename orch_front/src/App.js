import React from 'react';
import './css/App.css';

import atomics from './data/Atomics.json';
import services from './data/Services.json';

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
