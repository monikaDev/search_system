import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {UIColors} from '../../utilities/Constant';
import {isEmptyString} from '../../utilities/validation';

const ListItem = (props) => {
  const {title, searchTerm, updateSearchTerm, ...rest} = props;

  //It return the formatted title
  const titleToDisplay = useMemo(() => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    if (isEmptyString(title)) return;
    var titleArray = title.split(regex);
    titleArray.forEach((element, index) => {
      //If the element is same as searchTerm then it will converted into highlightedTitle
      if (element === searchTerm) {
        titleArray[index] = (
          <Text style={styles.highlightedTitle} key={index}>
            {titleArray[index]}
          </Text>
        );
      }
    });
    return <Text style={styles.title}>{titleArray}</Text>;
  }, [searchTerm, title]);

  return !isEmptyString(title) ? (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      onPress={() => updateSearchTerm(`${title} `)}>
      <Text style={styles.title}>{titleToDisplay}</Text>
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
  highlightedTitle: {
    fontSize: 16,
    color: UIColors.black,
    backgroundColor: UIColors.white,
  },
});

ListItem.propTypes = {
  title: PropTypes.string,
};

export default ListItem;
