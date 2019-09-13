export const gameOver = (allPlayers, seenPlayers) => {
  return allPlayers.length - seenPlayers.length < 2;
};
