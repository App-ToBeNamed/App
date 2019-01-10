import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EventsRecycler from './src/EventsRecycler';
import EventDetail from './src/EventDetail';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './src/components/Login/Login';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: EventsRecycler
    },
    EventDetail: {
      screen: EventDetail
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
      // <Login /> THIS WILL REPLACE WITH LOGIN
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaa',
//     },
//     appName:{
//       fontSize: 40,
//       fontWeight: 'bold',
//       alignSelf: 'center',
//     }
// });
