import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default class AddEvent extends Component {
    static navigationOptions = {
        title: 'New Event',
    };
    render() {
        return (
            <View style={styles.viewContainer}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TextInput style={styles.input}
                        autoCapitalize='sentences'
                        autoCorrect={true}
                        keyboardType='default'
                        returnKeyType="next"
                        ref={(input) => this.name = input}
                        onSubmitEditing={() => this.organizer.focus()}
                        placeholder='Name of Event'
                        placeholderTextColor='rgba(50,50,50,0.5)' />

                    <TextInput style={styles.input}
                        autoCapitalize='words'
                        keyboardType='default'
                        ref={(input) => this.organizer = input}
                        onSubmitEditing={() => this.location.focus()}
                        returnKeyType="next"
                        placeholder="Who's is organizing?"
                        placeholderTextColor='rgba(50,50,50,0.5)' />

                    <TextInput style={styles.input}
                        autoCapitalize='words'
                        keyboardType='default'
                        ref={(input) => this.location = input}
                        onSubmitEditing={() => this.time.focus()}
                        returnKeyType="next"
                        placeholder="Where's the party at?"
                        placeholderTextColor='rgba(50,50,50,0.5)' />

                    <TextInput style={styles.input}
                        autoCapitalize='words'
                        keyboardType='default'
                        ref={(input) => this.time = input}
                        returnKeyType="go"
                        placeholder="What time do we show up?"
                        placeholderTextColor='rgba(50,50,50,0.5)' />

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate("EventsRecycler", alert("Event Made"))}>
                        <Text style={styles.buttonText}>MAKE EVENT</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    },
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.4)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
})