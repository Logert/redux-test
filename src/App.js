import React, { Component } from 'react';
import {connect} from 'react-redux';
// import './App.css';
// import { Button } from 'react-bootstrap';
// import './bootstrap.css';


class App extends Component {
  addtrack () {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  render() {
    return (
      <div>
        
          <input type="text" ref={(input)=>{this.trackInput = input}} />
          <button onClick={this.addtrack.bind(this)}>Add track</button>
          <ul>
              {this.props.tracks.map((track,index)=>
                  <li key={index}>{track.name}</li>
              )}
          </ul>
          
      </div>
    );
  }
}

export default connect(
  state => ({ 
    tracks: state.tracks 
  }),
  dispatch =>({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({type: 'ADD_TRACK', payload: payload});
    }
  })
)(App);