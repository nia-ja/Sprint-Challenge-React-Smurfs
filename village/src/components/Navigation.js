import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <h1>SMURFS App</h1>
        <div>
          <Link to="/">Smurfs List</Link>
        </div>
        <div>
          <Link to="/smurf-form">Add Smurf</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
