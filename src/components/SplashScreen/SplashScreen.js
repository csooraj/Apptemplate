/**
 * This file handles the code for SplashScreen that is shown on the launching of the app
 * To customise the screen change the properties of AppLogoTile
 * For The list of font families see this link https://github.com/react-native-training/react-native-fonts
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import AppLogoTile from './AppLogoTile';

const appLogoLocation = require('../../assets/applogo.png');

const transitionDelay = 2000;

export default class SplashScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    setTimeout(() => this.goToHomeScreen(), transitionDelay);
  }

  goToHomeScreen() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomeScreen' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <AppLogoTile
        appLogoLocation={appLogoLocation}
        appLogoHeight={100}
        appLogoWidth={100}
        appName="News App"
        appNameColor="#F3E5F5"
        appNameFontFamily="sanserif-medium"
        appNameFontSize={30}
        appNameFontWeight="bold"
        backgroundColor="#3F51B5"
      />
    );
  }
}
