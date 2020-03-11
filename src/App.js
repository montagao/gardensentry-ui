import React, {Component} from 'react';
import './App.css';
import {Home} from './containers/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
  } 

  render() {
    return (
	<div className="App">
	  <React.Fragment>
		<Home events={this.state.data}/>
	  </React.Fragment>
    </div>
	);
  }
}

export default App;
