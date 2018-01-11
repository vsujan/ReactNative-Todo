import addTodo from './addTodo';
import { connect } from 'react-redux';
import ActionCreator from '../../actions'

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(ActionCreator.addTodo(todo))
});

export default connect(mapDispatchToProps)(addTodo);
