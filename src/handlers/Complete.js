import { connect } from 'react-redux';
import Complete from '../components/Complete/Complete';
import { startGame } from '../state/game/actions';

export default connect(
  state => ({
    ...state,
    playerScore:0, //will have to implement this
    played: state.played + 1
  }),
  { startGame }
)(Complete);

