import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import subjectsReducer from './SubjectsReducer';
import Home from './Home';
import redux from './redux';
// const store = createStore(subjectsReducer);
const App = () => {

  return (
    <Provider store={redux.store}>
      <Home />
    </Provider>
  );
};

export default App;
