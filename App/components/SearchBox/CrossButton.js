import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import LocalImages from '../../../assets/icons';

const CrossButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={LocalImages.crossGray} style={styles.crossIcon} />
    </TouchableOpacity>
  );
};

CrossButton.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {},
  crossIcon: {
    height: 15,
    width: 15,
  },
});

export default CrossButton;
