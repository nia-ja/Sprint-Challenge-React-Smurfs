import React from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className="Smurfs">
      {props.smurfs.map(smurf => {
        return (
          <Link to={`/smurfs/${smurf.id}`} key={smurf.id}>
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          </Link>
        );
      })}
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;