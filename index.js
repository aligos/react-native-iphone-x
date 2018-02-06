import { Dimensions, Platform } from 'react-native';
const { height } = Dimensions.get('window');

export default function isiPhoneX() {
  return Platform.OS === 'ios' && (height === 2436 || height === 812) ? true : false;
}
