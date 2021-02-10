import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {List, ListItem} from './components/List';
import SearchBox from './components/SearchBox/SearchBox';
import {getSuggestions} from './api/search';
import {UIColors} from './utilities/Constant';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSuggestions(searchTerm)
      .then((result) => {
        setSearchResults(result);
        console.log('result', result); //TODO: Remove
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

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
