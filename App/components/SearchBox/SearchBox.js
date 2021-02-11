import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TextInput} from 'react-native';

import LocalImages from '../../../assets/icons';
import {UIColors} from '../../utilities/Constant';
import CrossButton from './CrossButton';

const SearchBox = ({
  value,
  isInputFocus,
  onChangeText,
  onCancel,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      isInputFocus ? inputRef.current.focus() : inputRef.current.blur();
    }
    setIsFocused(isInputFocus);
  }, [isInputFocus]);

  return (
    <View
      style={[
        styles.inputContainer,
        {borderColor: isFocused ? UIColors.lightPink : UIColors.gray.medium},
      ]}>
      <Image source={LocalImages.searchGray} style={styles.searchIcon} />
      <TextInput
        ref={inputRef}
        style={styles.searchInput}
        autoFocus={true}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={UIColors.gray.light}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
      <CrossButton onPress={onCancel} />
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
    width: '85%',
    color: UIColors.white,
    padding: 12,
    fontSize: 14,
  },
});

export default SearchBox;
