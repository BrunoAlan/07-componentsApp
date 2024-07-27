import { View, Text } from 'react-native';
import Icon from '../../icons/Icon';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Icon name='add' color='blue' size={24} />
    </View>
  );
};
export default HomeScreen;
