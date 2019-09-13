import React from 'react';
import PropTypes from 'prop-types';

const PlayerOption = ({ player, altText, hasGuessed, guess }) => {
  const { first_name, last_name, fppg, images} = player;
  return(
    <div
      style="display: flex; flex-direction: column; align-items: center"
      onClick={() => guess(player)}
    >
      <img
        height="100px"
        width="100px"
        src={images.default.url}
        alt={ altText }
      />
      {first_name } {last_name }
      <br />
      {hasGuessed && fppg }
    </div>
  )
};

PlayerOption.propTypes = {
  player: PropTypes.object.isRequired,
  altText: PropTypes.string,
  hasGuessed: PropTypes.bool,
  guess: PropTypes.func.isRequired
};

export default PlayerOption;
