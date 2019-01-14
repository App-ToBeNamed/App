import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class SongSearch extends Component {
    static navigationOptions = {
        title: 'Find a track',
    };
    render() {
        return (
            <View style={styles.container}>
               <Text>SONG SEARCH</Text>
               <Text>will implement once spotify is connected</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
})