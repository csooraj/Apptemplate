/**
 * This file handles the code for SideBar
 * The theme for login screen is updated realtime using getTheme function
 * The Names for menu are taken from the array menuItems
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Dimensions,
  View,
} from 'react-native';


const { height } = Dimensions.get('window');

export default class SideBarHeader extends Component {

  propTypes = {
    menuHeaderImageLocation: PropTypes.string.isRequired,
    menuHeaderBackgroundColor: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View style={{ height: 0.3 * height, backgroundColor: this.props.menuHeaderBackgroundColor, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={this.props.menuHeaderImageLocation} style={{ width: 100, height: 100 }} />
      </View>
    );
  }
}
