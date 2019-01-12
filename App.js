import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EventsRecycler from './src/components/EventsRecycler';
import EventDetail from './src/components/EventDetail';
import Login from './src/components/Login';
import AddEvent from './src/components/AddEvent';

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login
    },
    EventsRecycler: {
      screen: EventsRecycler
    },
    EventDetail: {
      screen: EventDetail
    },
    AddEvent: {
      screen: AddEvent
    }

  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
