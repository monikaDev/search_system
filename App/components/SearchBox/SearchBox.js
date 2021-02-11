import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TextInput} from 'react-native';

import LocalImages from '../../../assets/icons';
import {UIColors} from '../../utilities/Constant';

const SearchBox = ({value, onChangeText, placeholder}) => (
  <View style={styles.inputContainer}>
    <Image source={LocalImages.searchGrey} style={styles.searchIcon} />
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.searchInput}
      placeholder={placeholder}
      placeholderTextColor={UIColors.lightGray}
    />
  </View>
);

SearchBox.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: UIColors.backgroundGray,
    height: 40,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: UIColors.transparent,
    width: '90%',
    color: UIColors.white,
    padding: 12,
  },
});

export default SearchBox;
