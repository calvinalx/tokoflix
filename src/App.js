import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NowPlaying from './components/NowPlaying'
import Movie from './components/Movie'

class App extends Component {
  render() {
    window.localStorage.clear();
    window.localStorage.setItem('balance', '100000');

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NowPlaying} />
          <Route path="/:movie" component={Movie} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
