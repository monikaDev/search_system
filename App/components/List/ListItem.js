import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = (props) => {
  const {data, ...rest} = props;

  return (
    <View {...rest}>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
});

ListItem.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ListItem;
