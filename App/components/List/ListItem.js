import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {UIColors} from '../../utilities/Constant';

const ListItem = (props) => {
  const {title, ...rest} = props;

  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: UIColors.backgroundGray,
  },
  title: {
    fontSize: 16,
    color: UIColors.white,
  },
});

ListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ListItem;
