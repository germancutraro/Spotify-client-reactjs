import React, { Component } from 'react';
import Songs from '../../Songs/Songs';

class Home extends Component {
  state = {
    song: ''
  };
  render() {
    return (
      <div>
        <input type="text" placeholder="Song..." value={this.state.song} onChange={e => this.setState({song: e.target.value})} />
        <Songs />
      </div>
    );
  }
}

export default Home;
