import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {List, ListItem} from './components/List';
import SearchBox from './components/SearchBox/SearchBox';
import StatusBar from './components/StatusBar/StatusBar';
import {getSuggestions} from './api/search';
import {UIColors} from './utilities/Constant';
import useDebounce from './hooks/useDebounce';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 200);

  useEffect(() => {
    getSuggestions(debouncedSearchTerm)
      .then((result) => {
        setSearchResults(result);
        console.log('result', result); //TODO: Remove
      })
      .catch((error) => {
        console.log(error);
      });
  }, [debouncedSearchTerm]);

  return (
    <>
      <StatusBar
        textColor="light"
        backgroundColor={UIColors.gray.light}
        translucent
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <SearchBox
          onChangeText={setSearchTerm}
          placeholder="What are you looking for?"
          value={searchTerm}
        />
        <List
          data={searchResults}
          renderItem={({item, index}) => (
            <ListItem
              title={item}
              searchTerm={searchTerm}
              updateSearchTerm={setSearchTerm}
            />
          )}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: UIColors.black,
    padding: 15,
  },
});

export default App;
