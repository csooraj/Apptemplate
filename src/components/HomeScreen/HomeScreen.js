/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  ScrollView,
  Image,
  TextInput,
  ListView,
  BackHandler,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
import SideBar from '../SideBar/SideBar';
import TitleBar from '../TitleBar/TitleBar';
import NewsTile from '../NewsTile/NewsTile';

const newsData = require('./test.json');
const changeCategory = require('./new.json');
let currentScreen = 'Home';

const { width, height } = Dimensions.get('window');
const appLogoLocation = require('../../assets/applogo.png');

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      state: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      newsData: newsData,
      showSearchBar: false,
    };
  }

  resetData() {
    this.setState({ newsData: newsData });
  }

  goToSinglePost(thumbnail, title, category, content) {
    const { navigate } = this.props.navigation;
    navigate('NewsDetails', { thumbnail: thumbnail, title: title, category: category, content: content });
  }

  goToSearch() {
    if (this.state.showSearchBar) {
      this.setState({ showSearchBar: false });
    } else {
      this.setState({ showSearchBar: true });
    }
  }

  searchData = (searchTerm) => {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let match = [];
    this.state.newsData.map((item, index)=>{
      if (item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        match.push(item);
      }
    });
    this.setState({ dataSource: ds.cloneWithRows(match), dataObtained: true });
  };

  render() {
    const list = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const { state } = this.props.navigation;
    const handleSideBarNavigation = (screenName) => {
      if (screenName !== state.routeName) {
        currentScreen = screenName;
        this.setState({ newsData: changeCategory.news.category[0][screenName], screenName: screenName });
        this.drawer.closeDrawer();
      } else {
        this.drawer.closeDrawer();
      }
    };
    return (
      <DrawerLayoutAndroid
        ref={(el) => { this.drawer = el; }}
        drawerWidth={0.72 * width}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={
          () => <SideBar
            menuHeaderBackgroundColor="white"
            menuHeaderImageLocation={appLogoLocation}
            menuItemBackgroundColor="#F44336"
            menuItemColor="white"
            menuItemFontFamily="sans-serif-medium"
            menuItemBorderColor="black"
            menuFooterBackgroundColor="white"
            menuFooterTextColor="black"
            menuFooterText="© 2018-2017 @Newsable.com"
            handleSideBarNavigation={handleSideBarNavigation}
          />
        }
      >
        <TitleBar
          homeHeaderColor="#3F51B5"
          homeIconColor="white"
          leftIcon="bars"
          rightIcon={this.state.showSearchBar ? 'times' : 'search'}
          logoUrl="https://cdn.dribbble.com/users/261302/screenshots/1361907/logoplaceholder.png"
          handleLeftIconPress={() => this.drawer.openDrawer()}
          handleRightIconPress={() => this.goToSearch()}
        />
        <View style={this.state.showSearchBar ? styles.searchView: styles.hideView}>
        <TextInput
          placeholder="Type here to search"
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        </View>
        <ListView
          style={{ flex: 0.9 }}
          dataSource={list.cloneWithRows(this.state.newsData)}
          renderRow={(item) => <NewsTile title={item.title} content={item.content} thumbnail={item.thumbnail} goToSinglePost={this.goToSinglePost.bind(this)} category={item.category} />}
        />
      </DrawerLayoutAndroid>
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
    flex: 1 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchView: {
    backgroundColor: 'red',
    padding: 10,
  },
  hideView: {
    width: 0,
    height: 0,
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
