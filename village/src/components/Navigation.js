import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <h1>Smurf Village</h1>
        <div className='links'>
          <button className='link'>
            <NavLink exact to="/" activeClassName='activeNavButton'>Smurfs List</NavLink>
          </button>
          <button className='link'>
            <NavLink to="/smurf-form" activeClassName='activeNavButton'>Add Smurf</NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
