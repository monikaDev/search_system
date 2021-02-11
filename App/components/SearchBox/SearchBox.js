import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TextInput} from 'react-native';

import LocalImages from '../../../assets/icons';
import {UIColors} from '../../utilities/Constant';

const SearchBox = ({value, onChangeText, placeholder}) => {
  const [isFocused, setIsFocused] = useState(true);

  const onInputBlur = () => {
    setIsFocused(false);
  };
  const onInputFocus = () => {
    setIsFocused(true);
  };
  return (
    <View
      style={[
        styles.inputContainer,
        {borderColor: isFocused ? UIColors.lightPink : UIColors.gray.medium},
      ]}>
      <Image source={LocalImages.searchGrey} style={styles.searchIcon} />
      <TextInput
        autoFocus={true}
        value={value}
        onChangeText={onChangeText}
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={UIColors.gray.light}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
      />
    </View>
  );
};

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
    backgroundColor: UIColors.gray.medium,
    height: 40,
    borderWidth: 1,
    marginTop: 20,
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
    fontSize: 14,
  },
});

export default SearchBox;
