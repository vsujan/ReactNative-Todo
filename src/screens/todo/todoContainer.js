import todo from './todo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  todoList: state.todoList
});

export default connect(mapStateToProps)(todo);
