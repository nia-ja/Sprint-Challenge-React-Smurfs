import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Image from './img/app_background.jpg';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import SmurfPage from './components/SmurfPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      SuccessMessage: ''
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
        this.setState({ smurfs: response.data, SuccessMessage: response.statusText });
      })
      .catch(err => console.log(err));
  }
  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({ smurfs: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  editSmurf = (id, updatedSmurf) => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
      .then(response => {
        this.setState({ smurfs: response.data, SuccessMessage: response.statusText })  
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div className="App">
        <img src={Image} alt='Small mountain village' />
        <Navigation />

        <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />

        <Route path='/smurf-form' render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} successMessage={this.state.SuccessMessage} headerText='Add Smurf' buttonText='Add to the village' action="add" /> } />

        <Route exact path="/smurfs/:id" render={(props) => <SmurfPage {...props} deleteSmurf={this.deleteSmurf} />} />

        <Route path="/smurfs/:id/edit" render={(props) => <SmurfForm {...props} editSmurf={this.editSmurf} successMessage={this.state.SuccessMessage} headerText='Edit Smurf' buttonText='Edit Smurf' action="edit" />} />
      </div>
    );
  }
}

export default App;
