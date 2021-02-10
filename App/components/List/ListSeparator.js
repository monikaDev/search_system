import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    color: 'white', //TODO: Gray
  },
});

export default ListSeparator;
