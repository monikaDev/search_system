import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {List, ListItem} from './components/List';
import SearchBox from './components/SearchBox/SearchBox';
import {UIColors} from './utilities/Constant';

const STATIC_DATA = [
  {title: 'Mumbai'},
  {title: 'Bangalore'},
  {title: 'Delhi'},
  {title: 'Hyderabad'},
  {title: 'Chennai'},
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <SearchBox placeholder="To Search type here" />
          <List
            data={STATIC_DATA}
            renderItem={({item, index}) => <ListItem data={item} />}
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
