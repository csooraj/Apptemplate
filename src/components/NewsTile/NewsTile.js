/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { height, width } = Dimensions.get('window');
export default class NewsTile extends Component {

  static navigationOptions = {
    header: null,
  };

  propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={this.props.goToSinglePost.bind(this, this.props.thumbnail, this.props.title, this.props.category, this.props.content)}>
        <Image resizeMode="cover" source={{ uri: this.props.thumbnail }} style={styles.image}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{this.props.title}</Text>
          </View>
        </Image>
        <TouchableOpacity style={{ padding: 5, backgroundColor: 'green', position: 'absolute', marginTop: 10, marginLeft: 5 }}>
          <Text style={{ color: 'white' }}>{this.props.category}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  nameContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    width: width,
  }
});
