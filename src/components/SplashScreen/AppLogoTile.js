/**
 * This file handles the code for AppLogoTile that is used in the SplashScreen Component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default class AppLogoTile extends Component {

  static navigationOptions = {
    header: null,
  };

  propTypes = {
    appLogoLocation: PropTypes.string.isRequired,
    appLogoHeight: PropTypes.number.isRequired,
    appLogoWidth: PropTypes.number.isRequired,
    appName: PropTypes.string.isRequired,
    appNameColor: PropTypes.string.isRequired,
    appNameFontSize: PropTypes.number.isRequired,
    appNameFontFamily: PropTypes.string.isRequired,
    appNameFontWeight: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View
        style={[styles.container,
          { backgroundColor: this.props.backgroundColor,
          },
        ]}
      >
        <Image
          resizeMode="contain"
          source={this.props.appLogoLocation}
          style={{
            height: this.props.appLogoHeight,
            width: this.props.appLogoWidth,
          }}
        />
        <Text
          style={{
            color: this.props.appNameColor,
            fontWeight: this.props.appNameFontWeight,
            fontSize: this.props.appNameFontSize,
            fontFamily: this.props.appNameFontFamily,
            marginTop: 10,
          }}
        >
          {this.props.appName}
        </Text>
      </View>
    );
  }
}
