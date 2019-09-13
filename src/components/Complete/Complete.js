import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Complete = ({ startGame, playerScore, played }) => {
  return (
    <Fragment>
      <h1>Game Finished</h1>
      <div>
        You scored: {{playerScore}} out of {{played}} 🎊
      </div>
      <button onClick={() => startGame()}>RESTART</button>
    </Fragment>
  );
};

Complete.propTypes = {
  playerScore: PropTypes.string.isRequired,
  played: PropTypes.string.isRequired,
  startGame: PropTypes.func.isRequired
};

export default Complete;
