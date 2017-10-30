/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import HtmlView from 'react-native-htmlview';
import {
  Image,
  Text,
  Share,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');

const htmlStyles = StyleSheet.create({
  p: {
    color: 'black',
    fontSize: 18,
    textAlign:'left',
    fontFamily: 'sans-serif-light',
  },
});

export default class NewsTile extends Component {

  propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.func.isRequired,
    }).isRequired,
  };

  shareContent(){
    Share.share({
    message: 'https://www.usatoday.com/story/money/cars/2017/10/27/bmw-creates-whole-new-suv-line-x-2/804659001/',
    url: 'http://bam.tech',
    title: 'Share News'
  }, {
    // Android only:
    dialogTitle: 'Share BAM goodness',
    // iOS only:
    excludedActivityTypes: [
      'com.apple.UIKit.activity.PostToTwitter'
    ]
  })
  }

  render() {
    const { state }= this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image resizeMode="cover" source={{ uri: state.params.thumbnail }} style={styles.image}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{state.params.title}</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Icon name="calendar-o" size={20} color="white" />
                <Text style={{ marginLeft: 5, color: "white" }}>3/10/2017</Text>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.shareContent()}>
                  <Icon name="share-alt-square" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </Image>
          <TouchableOpacity style={{ padding: 5, backgroundColor: 'green', position: 'absolute', marginTop: 10, marginLeft: 5 }}>
            <Text style={{ color: 'white' }}>{state.params.category}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10 }}>
          <HtmlView
            value={"<p style='text-align: justify;'>" + state.params.content + "</p>"}
            stylesheet={htmlStyles}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 0.438 * height,
    borderColor: '#EEEEEE',
    backgroundColor: 'white',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  nameContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
  }
});
