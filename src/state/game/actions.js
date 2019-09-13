import { getNextPair } from '../../utils/getNextPair';


const PLAYERS_JSON_URL =
  "https://gist.githubusercontent.com/liamjdouglas/79c5dc9f1ec682afac6ec0b0278175d5/raw/67ce51c2b06e44f365367c266bb00698c3f3bac4/mini_guessing_players.json";

export const START_GAME = 'START_GAME';
export const PLAYERS_LOADED = 'PLAYERS_LOADED';
export const GUESS_PLAYER = 'GUESS_PLAYER';

export const startGame = data => ({
  type: START_GAME,
  data
});

export const playersLoaded = (players) => ({
  type: PLAYERS_LOADED,
  players
});


export const guessPlayer = (id) => ({
  type: GUESS_PLAYER,
  id
});

export const loadPlayers = () => async (dispatch) => {
  try {
    await fetch(PLAYERS_JSON_URL).then(res => res.json()).then(({ players }) => {
      dispatch(playersLoaded(players));
    })
  } catch(e) {
    console.log(e);
  }

  return Promise.resolve('Success');
} ;
