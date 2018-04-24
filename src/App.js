import React, { Component } from 'react';
import Routes from './Routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes history={this.props.history} />
      </div>
    );
  }
}

export default App;
