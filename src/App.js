import React, { Component } from 'react';
import Player from './Player';
import reactLogo from './react-logo.svg';
import amsLogo from './media-services.svg';

import './App.css';

class App extends Component {
  render() {
    const sourceVideo = {
      "src": "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
      "type": "application/vnd.ms-sstr+xml"
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={amsLogo} className="App-logo" alt="AMS" />
          <img src={reactLogo} className="App-logo" alt="React" />
          <h1 className="App-title">Azure Media Player + React</h1>
        </header>
        <Player
          sourceVideo={sourceVideo}
        />
      </div>
    );
  }
}

export default App;
