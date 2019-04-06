import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import SmurfPage from './components/SmurfPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }
  addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(err => console.log(err));
  }
  deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} /> } />
        <Route exact path="/smurfs/:id" render={(props) => <SmurfPage {...props} deleteSmurf={this.deleteSmurf} />} />
      </div>
    );
  }
}

export default App;
