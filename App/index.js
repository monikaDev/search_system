import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {List, ListItem} from './components/List';
import SearchBox from './components/SearchBox/SearchBox';
import {getSuggestions} from './api/search';
import {UIColors} from './utilities/Constant';
import useDebounce from './hooks/useDebounce';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <SearchBox
            onChangeText={setSearchTerm}
            placeholder="To Search type here"
          />
          <List
            data={searchResults}
            renderItem={({item, index}) => <ListItem title={item} />}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: UIColors.black,
    padding: 15,
  },
});

export default App;
