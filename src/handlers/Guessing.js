import { connect } from 'react-redux';
import Guessing from '../components/Guessing/Guessing';
import { loadPlayers, guessPlayer} from '../state/game/actions';
import {playerSelector} from "../state/game/selector";

export default connect(
  state => ({
    ...state,
    playerA: playerSelector(state)(0),
    playerB: playerSelector(state)(1)
  }),
  { loadPlayers, guessPlayer }
)(Guessing);

