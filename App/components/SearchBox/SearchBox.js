import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TextInput} from 'react-native';

import LocalImages from '../../../assets/icons';

const SearchBox = ({value, onChangeText, placeholder}) => (
  <View style={styles.inputContainer}>
    <Image source={LocalImages.searchGrey} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      placeholderTextColor="grey"
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
    backgroundColor: '#2d3035', //TODO: Update it
    height: 40,
    margin: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  searchInput: {
    backgroundColor: 'transparent',
    width: '90%',
    color: 'white', //TODO: Update it
    padding: 12,
  },
});

export default SearchBox;
