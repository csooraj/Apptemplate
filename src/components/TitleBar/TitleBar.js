/**
 * This file handles the code for TitleBar
 * The styles are written in Styles.js
 * The theme configuration is passed from the component where the titlebar is used,
 * it is defined in propTypes
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles';

const appLogoLocation = require('../../assets/applogo.png');

export default class TitleBar extends Component {


  static navigationOptions = {
    header: null,
  };

  propTypes = {
    homeHeaderColor: PropTypes.string.isRequired,
    homeIconColor: PropTypes.string.isRequired,
    leftIcon: PropTypes.string.isRequired,
    rightIcon: PropTypes.string.isRequired,
    handleLeftIconPress: PropTypes.func.isRequired,
    handleRightIconPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={[Styles.container, { backgroundColor: this.props.homeHeaderColor ? this.props.homeHeaderColor : '#3c27a2' }]}>
        <TouchableOpacity style={Styles.iconContainer} onPress={this.props.handleLeftIconPress}>
          <Icon name={this.props.leftIcon} size={25} color={this.props.homeIconColor} />
        </TouchableOpacity>
        <View style={Styles.iconContainer}>
          <Image
            style={Styles.logo}
            resizeMode="contain"
            source={appLogoLocation}
          />
        </View>
        <TouchableOpacity style={Styles.iconContainer} onPress={this.props.handleRightIconPress}>
          <Icon name={this.props.rightIcon} size={25} color={this.props.homeIconColor} />
        </TouchableOpacity>
      </View>
    );
  }
}
