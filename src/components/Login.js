import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={styles.viewContainer}>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,0.7)' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry />

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.props.navigation.navigate("EventsRecycler")}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButtonContainer}
                        onPress={() => this.props.navigation.navigate("EventsRecycler")}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#2c3e50',
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
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButtonContainer: {
        backgroundColor: '#2c3e50',
        paddingVertical: 15,
        marginBottom: 10
    },
})