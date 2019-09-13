import { connect } from 'react-redux';
import Welcome from '../components/Welcome/Welcome';
import { startGame } from '../state/game/actions';

export default connect(
  state => ({
    ...state
  }),
  { startGame }
)(Welcome);

