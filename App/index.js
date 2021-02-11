/**
 * Screen to launch Autocomplete search box
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import StatusBar from './components/StatusBar/StatusBar';
import {getSuggestions} from './api/search';
import useDebounce from './hooks/useDebounce';
import {UIColors, SINGLE_SPACE} from './utilities/Constant';
import {getCurrentSearchKey} from './utilities/helper';
import {isEmptyString} from './utilities/validation';
import AutoSuggestionBox from './components/AutoSuggestionBox/AutoSuggestionBox';

const DEBOUNCE_DELAY = 200;
const App = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isShowList, setIsShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(currentSearchTerm, DEBOUNCE_DELAY);

  useEffect(() => {
    setCurrentSearchTerm(getCurrentSearchKey(searchTerm));
  }, [searchTerm]);

  useEffect(() => {
    //Mock API call for fetching the suggestion list
    getSuggestions(debouncedSearchTerm)
      .then((result) => {
        setSearchResults(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [debouncedSearchTerm]);

  //To update the searchTerm when user type any word
  const onChangeSearchTerm = (value) => {
    setSearchTerm(value);
    setIsShowList(!isEmptyString(value));
    setIsInputFocus(true);
  };

  //This function is used to updated the search term when user select search result
  const updateSearchTerm = (value) => {
    const searchArray = searchTerm.split(SINGLE_SPACE);
    searchArray[searchArray.length - 1] = value;
    setSearchTerm(searchArray.join(SINGLE_SPACE));
    setIsShowList(false);
  };

  //This function is used to perform action when user click outside of the search box
  const onOuterClick = () => {
    setIsShowList(false);
    setIsInputFocus(false);
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container} onStartShouldSetResponder={onOuterClick}>
          <Text style={styles.title}>Search</Text>
          <AutoSuggestionBox
            isShowList={isShowList}
            searchTerm={searchTerm}
            isInputFocus={isInputFocus}
            currentSearchTerm={currentSearchTerm}
            searchResults={searchResults}
            onChangeSearchTerm={onChangeSearchTerm}
            setIsInputFocus={setIsInputFocus}
            setSearchTerm={setSearchTerm}
            updateSearchTerm={updateSearchTerm}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  safeAreaView: {
    backgroundColor: UIColors.black,
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: UIColors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default App;
