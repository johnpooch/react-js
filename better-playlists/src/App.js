import React, { Component } from 'react';
import './App.css';

let defaultTextColor = "#000"
let defaultStyle = {
  color: defaultTextColor,
}

let fakeServerData = {
  user: {
    name: "John",
    playlists: [{
        name: "Alternative 90s",
        songs: [
          {name: "Smells Like Teen Spirit", duration: 1345}, 
          {name: "Stereo", duration: 1346}, 
          {name: "Debaser", duration: 1347}
          ]
      },
      {
        name: "Hip Hop Bangers",
        songs: [
          {name: "Simon Says", duration: 1325}, 
          {name: "Hit'em Up", duration: 1425},
          {name: "1539 M. Calvert", duration: 2431},
          ]
      },
      {
        name: "Indie",
        songs: [
          {name: "1,2,3", duration: 4231},
          {name: "Kicker", duration: 2413}, 
          {name: "Mistress", duration: 4231}
        ]
      },
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{Math.round(totalDuration/(60*60))} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width: "20%"}}>
       <img/>
       <h3>Playlist Name</h3>
       <ul>
        <li>Artist 1</li>
        <li>Artist 2</li>
        <li>Artist 3</li>
       </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData })
    }, 1000)
  };

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1>
            {this.state.serverData.user.name}'s playlist
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h3 style={defaultStyle}>Loading...</h3>
        }
      </div>
    );
  }
}

export default App;
