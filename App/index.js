import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {List, ListItem} from './components/List';
import SearchBox from './components/SearchBox/SearchBox';
import StatusBar from './components/StatusBar/StatusBar';
import {getSuggestions} from './api/search';
import {UIColors} from './utilities/Constant';
import useDebounce from './hooks/useDebounce';
import {getCurrentSearchKey} from './utilities/helper';

const App = () => {
  const [isShowList, setIsShowList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debouncedSearchTerm = useDebounce(getCurrentSearchKey(searchTerm), 200);

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

  const onChangeSearchTerm = (value, showList) => {
    setSearchTerm(value);
    setIsShowList(showList);
  };

  return (
    <>
      <StatusBar backgroundColor={UIColors.gray.light} translucent />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.title}>Search</Text>
          <SearchBox
            onChangeText={(value) => onChangeSearchTerm(value, true)}
            placeholder="What are you looking for?"
            value={searchTerm}
          />
          {isShowList && (
            <List
              data={searchResults}
              keyExtractor={(item) => item}
              renderItem={({item, index}) => (
                <ListItem
                  title={item}
                  searchTerm={searchTerm}
                  updateSearchTerm={(value) => onChangeSearchTerm(value, false)}
                />
              )}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
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
