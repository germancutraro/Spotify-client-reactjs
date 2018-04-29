import React, { Component } from 'react';
import Songs from '../../Songs/Songs';
import NavBar from '../NavBar/NavBar';
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
        <NavBar 
          inputValue={this.state.song}
          onChangeHandler={e => this.setState({song: e.target.value})}
          onClickHandler={e => this.props.searchSong(this.state.song)} 
        />
        <Songs />
      </div>
    );
  }
}

const mapStateToProps = state => ({ songs: state.songs });

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    isSignIn,
    searchSong
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
