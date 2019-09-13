import { createSelector } from 'reselect';

const playersSelector = state => state && state.players;

const nextPairSelector = state => state && state.nextPair;

const playerSelector = createSelector(
  playersSelector,
  nextPairSelector,
  (players, nextPair) => (index) => players && players.find(id => nextPair[index] === id) // eslint-disable-line security/detect-object-injection
);

export { playerSelector };
