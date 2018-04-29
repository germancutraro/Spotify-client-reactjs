import React, { Component } from 'react';
import Songs from '../../Songs/Songs';
// Actions
import { isSignIn, searchSong } from '../../../actions';
// React and Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  state = {
    song: ''
  };
  componentWillMount() {
    this.props.isSignIn();
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Song..." value={this.state.song} onChange={e => this.setState({song: e.target.value})} />
        <button onClick={ e => this.props.searchSong(this.state.song) }>Go!</button>
        <Songs />
      </div>
    );
  }
}

// const mapStateToProps = () => {

// };


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    isSignIn,
    searchSong
  }, dispatch)
};

export default connect(null, mapDispatchToProps)(Home);
