import React, {Component} from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import {Home} from './containers/Home/Home';

class App extends Component {
  render() {
    return (
	<div className="App">
		<div className="MainPlayer">
			<ReactPlayer url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' controls/>
		</div>
	  <React.Fragment>
		<Home/>

	  </React.Fragment>
    </div>
	);
  }
}

export default App;
