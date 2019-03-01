import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image, TouchableOpacity, Button } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Ionicons } from '@expo/vector-icons';
import SongModel from './models/SongModel';
import faker from 'faker';
import preloaded from './preloaded';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Queue extends Component {

  constructor(props) {
    super(props);

    this.data = [];

    for (i = 0; i < preloaded.length; i += 1) {
      var song = new SongModel(faker.image.people(), faker.hacker.noun(), faker.name.findName(), 0, 0);
      if(preloaded[i].name.length<40){
        this.data.push({
        type: 'NORMAL',
        item: {
          id: song.queueCode,
          image: preloaded[i].album.images[0].url,
          songName: preloaded[i].name,
          artist: preloaded[i].artists[0].name,
          voteCount: song.voteCount,
        },
        });
      }
      
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
          dim.height = 60;
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
      title: 'Queue',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("SongSearch")} style={styles.addButton} >
          <Ionicons name="md-add" size={32} color="black" />
        </TouchableOpacity>
      ),
    };

  };
  rowRenderer = (type, data) => {
    var { image, songName, artist, voteCount, id } = data.item;
    return (
      <View style={styles.listItem}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.body}>
          <Text style={styles.name}>{songName}</Text>
          <Text style={styles.info}>{artist}</Text>
        </View>
        <View style={styles.upVote}>
          <Text style={styles.count}>{voteCount}</Text>
          <TouchableOpacity>
            <Ionicons
              style={styles.upIcon}
              name="md-arrow-up"
              size={25}
              color="black" />
          </TouchableOpacity>
        </View>
      </View>
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
    height: 55,
    width: 55,
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
    alignItems: 'center',
  },
  addButton: {
    marginRight: 20,
  },
  upVote: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  count: {
    backgroundColor: 'rgba(225,225,225,0.3)',
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  upIcon: {
    marginRight: 5,
    padding: 10,
  }

});