import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

class SmurfPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          smurf: ''
        };
    }
    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.fetchSmurf(id);
    }
    fetchSmurf = id => {
    axios
        .get(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
        this.setState(() => ({ smurf: response.data }));
        })
        .catch(error => {
        console.error(error);
        });
    };
    deleteSmurf = () => {
        this.props.deleteSmurf(this.state.smurf.id);
        setTimeout(() => this.props.history.push('/smurfs-list'), 300);
    }
    render(props) {
        const { name, height, age } = this.state.smurf;
        return (
            <div className="smurf-page-wrapper">
               <Smurf name={name}  height={height} age={age} />
               <div className='controls'>
                    <Link to={`/smurfs/${this.state.smurf.id}/edit`}><button className='btn'>Edit</button></Link>
                    <button className='btn' onClick={this.deleteSmurf}>Delete</button>
               </div>
           </div>
       )
    }
}

export default SmurfPage;