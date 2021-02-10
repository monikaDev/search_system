import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListSeparator from './ListSeparator';

const List = (props) => {
  const {data, ...rest} = props;
  return (
    <FlatList
      {...rest}
      data={data}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <ListSeparator />}
    />
  );
};

List.propTypes = {
  ...FlatList.propTypes,
  data: PropTypes.array.isRequired,
};

export default List;
