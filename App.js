import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomePage from './src/HomePage';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const App = () => {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: App,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
