import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    height: 0.08 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
  },
});


export default Styles;
