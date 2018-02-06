import { Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window');
const IS_IOS = Platform.OS === 'ios';

export default function isiPhoneX() {
  return IS_IOS && (height === 2436 || height === 812) ? true : false;
}
