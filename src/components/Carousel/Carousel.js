/**
 * This file handles the code for SideBar
 * The theme for login screen is updated realtime using getTheme function
 * The Names for menu are taken from the array menuItems
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-carousel';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';


const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default class NewsCarousel extends Component {

  render() {
    return (
      <Carousel
        width={width}
        delay={2000}
        indicatorOffset={-10}
      >
       <View style={styles.container}>
         <Image  resizeMode="cover" style={{ height: null, width: null, flex: 1, alignItems: 'center', justifyContent: 'center' }} source={{ uri: 'http://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2017/09/iphone-x-uk-release-date-uk-price-specs-features-design-4.jpg?itok=hGm5Tlf0' }}
         >
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
         <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>iPhone X release date, price and features | TechRadar</Text>
         </View>
         </Image>
       </View>
       <View style={styles.container}>
         <Image  resizeMode="cover" style={{ height: null, width: null, flex: 1, alignItems: 'center', justifyContent: 'center' }} source={{ uri: 'http://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2017/09/iphone-x-uk-release-date-uk-price-specs-features-design-4.jpg?itok=hGm5Tlf0' }}
         >
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
         <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>iPhone X release date, price and features | TechRadar</Text>
         </View>
         </Image>
       </View>
       <View style={styles.container}>
         <Image  resizeMode="cover" style={{ height: null, width: null, flex: 1, alignItems: 'center', justifyContent: 'center' }} source={{ uri: 'http://cdn2.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2017/09/iphone-x-uk-release-date-uk-price-specs-features-design-4.jpg?itok=hGm5Tlf0' }}
         >
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)'}}>
         <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>iPhone X release date, price and features | TechRadar</Text>
         </View>
         </Image>
       </View>
     </Carousel>
    );
  }
}
