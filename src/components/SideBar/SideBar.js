/**
 * This file handles the code for SideBar
 * The theme for login screen is updated realtime using getTheme function
 * The Names for menu are taken from the array menuItems
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ListView,
  TouchableOpacity,
  View,
} from 'react-native';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

const menuItems = [
  { name: 'Breaking News' },
  { name: 'Politics' },
  { name: 'Automotive' },
  { name: 'Movie' },
  { name: 'Technology' },
  { name: 'Sports' },
];

export default class SideBar extends Component {

  propTypes = {
    handleSideBarNavigation: PropTypes.func.isRequired,
    menuItemColor: PropTypes.string.isRequired,
    menuItemFontFamily: PropTypes.string.isRequired,
    menuItemBackgroundColor: PropTypes.string.isRequired,
    menuItemBorderColor: PropTypes.string.isRequired,
    menuHeaderBackgroundColor: PropTypes.string.isRequired,
    menuHeaderImageLocation: PropTypes.string.isRequired,
    menuFooterBackgroundColor: PropTypes.string.isRequired,
    menuFooterTextColor: PropTypes.string.isRequired,
    menuFooterText: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      collapsed: true,
    };
    this.props.handleSideBarNavigation = this.props.handleSideBarNavigation.bind(this);
  }


  render() {
    const list = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={{ flex: 1 }}>
        <ListView
          style={{ flex: 0.9, backgroundColor: 'white' }}
          dataSource={list.cloneWithRows(menuItems)}
          renderHeader={() =>
            <SideBarHeader
              menuHeaderBackgroundColor={this.props.menuHeaderBackgroundColor}
              menuHeaderImageLocation={this.props.menuHeaderImageLocation}
            />}
          renderRow={menu =>
            <TouchableOpacity
              onPress={() => this.props.handleSideBarNavigation(menu.name)}
              style={{
                padding: 20,
                margin: 5,
                marginBottom: 5,
                backgroundColor: this.props.menuItemBackgroundColor,
                borderColor: this.props.menuItemBorderColor,
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  color: this.props.menuItemColor,
                  fontFamily: this.props.menuItemFontFamily,
                  fontWeight: 'bold',
                }}
              >
                {menu.name}
              </Text>
            </TouchableOpacity>}
        />
        <SideBarFooter
          menuFooterBackgroundColor={this.props.menuFooterBackgroundColor}
          menuFooterTextColor={this.props.menuFooterTextColor}
          menuFooterText={this.props.menuFooterText}
        />
      </View>
    );
  }
}
