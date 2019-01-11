import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableHighlight } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class EventsRecycler extends Component {
  static navigationOptions = {
    title: 'Explore',
  };
  constructor(props) {
    super(props);

    const fakeData = [];
    for (i = 0; i < 100; i += 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          eventName: "Event Name",
          organizer: "Organizer:",
          location: "Location:",
          time: "Time:",
        },
      });
    }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = SCREEN_WIDTH;
          dim.height = 100;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })
  }

  rowRenderer = (type, data) => {
    const { image, eventName, organizer, location, time } = data.item;
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate(
        "EventDetail", {
          image: image,
          eventName: eventName,
          organizer: organizer,
          location: location,
          time: time,
        })
      }>
        <View style={styles.listItem}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.body}>
            <Text style={styles.name}>{eventName}</Text>
            <Text style={styles.info}>{organizer}</Text>
            <Text style={styles.info}>{location}</Text>
            <Text style={styles.info}>{time}</Text>
          </View>
        </View>
      </TouchableHighlight>
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
    height: 80,
    width: 80,
    backgroundColor: '#abc',
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

});