import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;


export default class EventDetail extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('eventName', 'Your Event'),
        };
    };
    render() {
        const { navigation } = this.props;
        const image = navigation.getParam('image');
        const organizer = navigation.getParam('organizer', 'Missing organizers name');
        const location = navigation.getParam('location', 'Missing location');
        const time = navigation.getParam('time', 'No time added');
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.body}>
                    <Text style={styles.info}>{JSON.stringify(organizer)}</Text>
                    <Text style={styles.info}>{JSON.stringify(location)}</Text>
                    <Text style={styles.info}>{JSON.stringify(time)}</Text>
                </View>
                <Button title="Join event and start queuing" onPress={() => alert("You have joined this event")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 1,
        minWidth: 1,
    },
    body: {
        marginLeft: 10,
        marginRight: 10,
        maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
    },
    image: {
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: '#abc',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 20,
        opacity: 0.5,
    },
    listItem: {
        flexDirection: 'row',
        margin: 10,
    },

});
