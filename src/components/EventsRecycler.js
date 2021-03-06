import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, Button } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Ionicons } from '@expo/vector-icons';
import EventModel from './models/EventModel';
import { Divider } from 'react-native-elements';
import faker from 'faker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class EventsRecycler extends Component{
  
  constructor(props) {
    super(props);

    this.data = [];

    for (i = 0; i < 100; i += 1) {
      var event = new EventModel("https://i.scdn.co/image/b2d894477a1921db71648df73bda055f68e86928", faker.random.word(), faker.name.findName(), faker.address.city(), faker.date.weekday() + ', ' + faker.date.month() + ' ' + faker.random.number(2) + ', 2019', 0);
      this.data.push({
        type: 'NORMAL',
        item: {
          id: event.queueCode,
          eventImg: event.eventImg,
          eventName: event.eventName,
          organizer: event.organizer,
          location: event.location,
          time: event.time,
        },
      });
    }
    addEvent = (event) => {
      i++;
      this.data.push({
        type: 'NORMAL',
        item: {
          id: event.queueCode,
          eventImg: event.eventImg,
          eventName: event.eventName,
          organizer: event.organizer,
          location: event.location,
          time: event.time,
        },
      })
      
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(this.data),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = SCREEN_WIDTH;
          dim.height = SCREEN_HEIGHT/3;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Explore',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("AddEvent")} style={styles.addButton}>
          <Ionicons name="md-add" size={30} color="black" />
        </TouchableOpacity>
      ),
    };

  };

  rowRenderer = (type, data) => {
    const { eventImg, eventName, organizer, location, time } = data.item;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(
        "EventDetail", {
          eventImg: eventImg,
          eventName: eventName,
          organizer: organizer,
          location: location,
          time: time,
        })
      }>
        <View style={styles.listItem}>
          <Image style={styles.image} source={{ uri: eventImg }} />
          <View style={styles.body}>
            <Text style={styles.name}>{eventName}</Text>
            <Text style={styles.info}>Organized by: {organizer}</Text>
            <Text style={styles.info}>Where? : {location}</Text>
            <Text style={styles.info}>When? : {time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <RecyclerListView
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
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
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
  addButton: {
    paddingRight: 11,
  },
  addButton: {
    marginRight: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

});