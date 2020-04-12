import React from 'react';
import './css/App.css';

import atomics from './data/Atomics.json';
import services from './data/Services.json';

import Dashboard from './components/front_v2/Dashboard';
//import List from './components/front_v2/listItems';
import Home from './components/front_v2/Home';


class App extends React.Component {

  state = {
    atomics : atomics,
    services : services
  }

  render() {
    return( 
      <div>
          <Home/>
      </div>
    );
  }
}


export default App;
