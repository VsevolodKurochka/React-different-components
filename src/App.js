import React, { Component } from 'react';

import Filter from './Filter/Filter';

class App extends Component {
  render(){
    return(
      <Filter source="https://api.myjson.com/bins/196b1d" />
    )
  }
}

export default App;