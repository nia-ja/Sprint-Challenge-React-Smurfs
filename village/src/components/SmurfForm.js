import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
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
    const id = Number(this.props.match.params.id);
    this.fetchSmurf(id);
    this.setState(() => ({ id: id }));
  }
  fetchSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState(() => ({ name: response.data.name, age: response.data.age, height: response.data.height }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  onSubmit = event => {
    if(this.props.action === 'edit') {
      this.editSmurf(event); 
    } else {
      this.addSmurf(event);
    }
  }
  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }
  editSmurf = event => {
    event.preventDefault();
      const myId = Number(this.state.id);
      const updatedSmurf = {
          name: this.state.name,
          age: Number(this.state.age),
          height: this.state.height
      }
      this.props.editSmurf(myId, updatedSmurf);
      // this.setState({responseMessage: 'Done!'});
      // setTimeout(() => this.setState({responseMessage: ''}), 3000);
  }
  componentWillReceiveProps() {
    this.setState({
      responseMessage: this.props.successMessage
    })
    setTimeout(() => this.setState({responseMessage: ''}), 3000);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className='message'>{this.state.responseMessage}</div>
          <button className="btn" type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
