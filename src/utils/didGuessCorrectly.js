const didGuessCorrectly = (players, guessedPlayerID, currentPairIDs) => {
  const guessedPlayerFPPG = players.find(({ id }) => guessedPlayerID === id).fppg;
  const otherPlayerID = currentPairIDs.find(id => id !== guessedPlayerID);
  const otherPlayerFPPG = players.find(({ id }) => otherPlayerID === id).fppg;
  return guessedPlayerFPPG > otherPlayerFPPG;
};

export { didGuessCorrectly };
