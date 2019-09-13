import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ startGame }) => {
  return (
    <button onClick={() => startGame()} >Start</button>
  )
};

Welcome.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default Welcome;
