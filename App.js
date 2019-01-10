import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EventsRecycler from './src/EventsRecycler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0.12, flexDirection: 'row'}}>
          <Text style = {styles.appName}>APP_Name</Text>
        </View>
        <EventsRecycler style={{flex: 0.9}}/>
        <View style={{flex: 0.08, flexDirection: 'row', justifyContent: 'center'}}>
          <Button title = 'tab1'/>
          <Button title = 'tab2'/>
          <Button title = 'tab3'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    },
    appName:{
      fontSize: 40,
      fontWeight: 'bold',
      alignSelf: 'center',
    }
});
