import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
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
        {!props.item.completed &&
        (
          <Image source={_getImageUri('check_greenBg.png')} style={{width: 22, height: 22, backgroundColor: 'red'}}/>
        )}
      </View>
    </View>
  )
};

const _getImageUri = src => {
  if (Platform.OS === 'android') {
    return { uri: `assets_images_${src}` };
  }
  return { uri: src };
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
