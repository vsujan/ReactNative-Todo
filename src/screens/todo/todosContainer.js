import todo from './todos';
import { connect } from 'react-redux';
import ActionCreator from '../../actions';

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
  fetchTodoList: () => dispatch(ActionCreator.fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(todo);
