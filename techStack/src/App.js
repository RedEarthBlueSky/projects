import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  const store = createStore(reducers);
  console.log(store);
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText='Tech Stack App' />
        <Text>This is my app!</Text>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
