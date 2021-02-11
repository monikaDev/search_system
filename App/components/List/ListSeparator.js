import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UIColors} from '../../utilities/Constant';

const ListSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: UIColors.gray.light,
  },
});

export default ListSeparator;
