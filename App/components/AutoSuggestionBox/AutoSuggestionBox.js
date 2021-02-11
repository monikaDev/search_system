import React from 'react';
import PropTypes from 'prop-types';

import {EMPTY_STRING} from '../../utilities/Constant';
import {List, ListItem} from '../List';
import SearchBox from '../SearchBox/SearchBox';

const AutoSuggestionBox = ({
  isShowList,
  isInputFocus,
  searchTerm,
  searchResults,
  currentSearchTerm,
  onChangeSearchTerm,
  setIsInputFocus,
  setSearchTerm,
  updateSearchTerm,
}) => {
  return (
    <>
      <SearchBox
        onFocus={() => setIsInputFocus(true)}
        isInputFocus={isInputFocus}
        onChangeText={(value) => onChangeSearchTerm(value)}
        placeholder="What are you looking for?"
        value={searchTerm}
        onCancel={() => setSearchTerm(EMPTY_STRING)}
      />
      {isShowList && (
        <List
          data={searchResults}
          keyExtractor={(item) => item}
          renderItem={({item, index}) => (
            <ListItem
              title={item}
              searchTerm={currentSearchTerm}
              updateSearchTerm={(value) => updateSearchTerm(value)}
            />
          )}
        />
      )}
    </>
  );
};

AutoSuggestionBox.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
};

export default AutoSuggestionBox;
