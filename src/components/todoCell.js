import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const TodoCell = props => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.titleText}>{props.item.title}</Text>
        <Text>{props.item.description}</Text>
      </View>
      <View style={styles.indicatorWrapper}>
        <Text>{props.item.completed ? '1' : '0'}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 12,
    marginBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  contentWrapper: {},
  indicatorWrapper: {},
  titleText: {
    fontSize: 16,
    fontWeight: '600'
  },
  descText: {}
});

export default TodoCell;
