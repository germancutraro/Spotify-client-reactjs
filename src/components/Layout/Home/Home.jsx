import React, { Component } from "react";
import Songs from "../../Songs/Songs";
import NavBar from "../NavBar/NavBar";
// Actions
import { isSignIn, searchSong } from "../../../actions";
// React and Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// Other modules
import Spinner from 'react-spinkit'

class Home extends Component {
  state = {
    song: ""
  };
  componentWillMount() {
    this.props.isSignIn();
  }
  render() {
    const { songs } = this.props;
    let styles = {
      width: '900px',
      height: '800px',
      margin: 'auto'
    };
    return (
      <div>
        <NavBar
          inputValue={this.state.song}
          onChangeHandler={e => this.setState({ song: e.target.value })}
          onClickHandler={e => this.props.searchSong(this.state.song)}
        />
        <div>
         {songs.type === 'IS_FETCHING' ?  <Spinner name="line-scale-pulse-out" color="lime" style={styles}/> : <Songs /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ songs: state.songs });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      isSignIn,
      searchSong
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
