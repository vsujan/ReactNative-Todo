import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';

import TodoCell from '../../components/todoCell';

export default class Todo extends Component<{}> {

  componentDidMount() {
    this.props.fetchTodoList();
  }

  componentWillReceiveProps(props) {
    console.log('RECEIVED PROPS: ', props.todoList);
  }

  _renderEmptyView = () => {
    return (
      <View>
        <Text>No todos found</Text>
      </View>
    )
  };

  _renderCell = (todo, index) => {
    return (
      <TodoCell key={index}
        item={todo}
      />
    )
  };

  _renderListView = todoList => {
    return (
      <ScrollView style={styles.scrollingContainer}>
        {todoList.map((todo, index) => this._renderCell(todo, index))}
      </ScrollView>
    )
  };

  render() {
    const { todoList } = this.props;

    if (!todoList.length) {
      return this._renderEmptyView();
    }
    return (
      <View style={styles.mainContainer}>
        {this._renderListView(todoList)}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  scrollingContainer: {
    backgroundColor: 'gray'
  }
});
