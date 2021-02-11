import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {UIColors} from '../../utilities/Constant';
import {isEmptyString} from '../../utilities/validation';

const ListItem = (props) => {
  const {title, updateSearchTerm, ...rest} = props;

  return !isEmptyString(title) ? (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      onPress={() => updateSearchTerm(`${title} `)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: UIColors.gray.medium,
  },
  title: {
    fontSize: 16,
    color: UIColors.white,
  },
});

ListItem.propTypes = {
  title: PropTypes.string.isRquired,
};

export default ListItem;
