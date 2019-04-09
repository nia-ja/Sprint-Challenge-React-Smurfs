import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      responseMessage: '',
      id: '',
      onSubmit: ''
    };

  }  
  componentDidMount() {
    this._isMounted = true;
    if(this.props.action === 'edit') {
      const id = Number(this.props.match.params.id);
      this._isMounted && this.fetchSmurf(id);
      this._isMounted && this.setState(() => ({ id: id }));
    }
  }
  fetchSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this._isMounted && this.setState(() => ({ name: response.data.name, age: response.data.age, height: response.data.height }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  onSubmit = event => {
    if(this.props.action === 'edit') {
      this._isMounted && this.editSmurf(event); 
    } else {
      this._isMounted && this.addSmurf(event);
    }
  }
  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this._isMounted && this.props.addSmurf(newSmurf);    this._isMounted && this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push('/smurfs-list');
  }
  editSmurf = event => {
    event.preventDefault();
      const myId = Number(this.state.id);
      const updatedSmurf = {
          name: this.state.name,
          age: Number(this.state.age),
          height: this.state.height
      }
      this._isMounted && this.props.editSmurf(myId, updatedSmurf);
      this._isMounted && setTimeout(() => this.props.history.push('/smurfs-list'), 2000);
  }
  componentWillReceiveProps() {
    this._isMounted && this.setState({
      responseMessage: this.props.successMessage
    })
    this._isMounted && setTimeout(() => this._isMounted && this.setState({responseMessage: ''}), 1000);
  }
  handleInputChange = e => {
    this._isMounted && this.setState({ [e.target.name]: e.target.value });
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <div className="SmurfForm">
        <h3>{this.props.headerText}</h3>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height in cm"
            value={this.state.height}
            name="height"
            type="number"
          />
          <div className='message'>{this.state.responseMessage}</div>
          <button className="btn" type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;