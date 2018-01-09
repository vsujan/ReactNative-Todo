import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class Todo extends Component<{}> {

  componentDidMount() {
    this.props.fetchTodoList();
  }

  componentWillReceiveProps(props) {
    console.log('RECEIVED PROPS: ', props.todoList);
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text>Todo list appears here.</Text>
      </View>
    )
  }

}