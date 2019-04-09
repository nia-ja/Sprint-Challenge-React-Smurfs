import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div>
        <img className='village' src="https://www.pinclipart.com/picdir/big/171-1715222_house-drawing-download-computer-icons-smurfs-house-vector.png" alt="" />
      </div>
      <h3>{props.name}</h3>
      <p className='bold'>{props.height} cm tall</p>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;