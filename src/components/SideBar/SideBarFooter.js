/**
 * This file handles the code for SideBar
 * The theme for login screen is updated realtime using getTheme function
 * The Names for menu are taken from the array menuItems
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Dimensions,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');

export default class SideBarFooter extends Component {

  propTypes = {
    menuFooterText: PropTypes.string.isRequired,
    menuFooterTextColor: PropTypes.string.isRequired,
    menuFooterBackgroundColor: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View style={{ height: 0.1 * height, backgroundColor: this.props.menuFooterBackgroundColor, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: this.props.menuFooterTextColor }}>
          {this.props.menuFooterText}
        </Text>
      </View>
    );
  }
}
