import {
  START_GAME,
  PLAYERS_LOADED,
  GUESS_PLAYER
} from './actions';
import { getNextPair, didGuessCorrectly, gameOver } from '../../utils';

const game = (state = {}, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        step: "GUESSING",
        playerScore: 0,
        played: 0,
        seenPlayerIDs: []
      };
    case PLAYERS_LOADED:
      return {
        ...state,
        players: [...action.players],
        seenPlayerIDs: [],
        nextPair: getNextPair(action.players, []),
        playerScore: 0,
        played: 0
      };
    case GUESS_PLAYER:
      const guessedCorrectly = didGuessCorrectly(
        state.players,
        action.id,
        state.nextPair
      );
      const newSeenPlayerIDs = [...state.seenPlayerIDs, ...state.nextPair];
      const newScore = state.playerScore + Number(guessedCorrectly);
      const played = state.played + 1;
      if (gameOver(state.players, newSeenPlayerIDs)) {
        return {
          ...state,
          playerScore: newScore,
          played,
          step: "GAME_COMPLETE"
        };
      }
      const newNextPair = getNextPair(state.players, newSeenPlayerIDs);
      return {
        ...state,
        played,
        playerScore: newScore,
        seenPlayerIDs: newSeenPlayerIDs,
        nextPair: newNextPair
      };
    default:
      return state;
  }
};

export default game;
