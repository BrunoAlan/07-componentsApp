import { colors } from '@/src/config/theme';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Icon from '../../icons/Icon';

interface Props {
  name: string;
  icon: string;
  component: string;
}

const MenuItem = ({ name, icon, component }: Props) => {
  return (
    <Pressable>
      <View
        style={{ ...styles.container, backgroundColor: colors.cardBackground }}
      >
        <Icon
          name={icon}
          size={25}
          color={colors.primary}
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: colors.text }}>{name}</Text>
        <Icon
          name='chevron-forward-outline'
          size={25}
          color={colors.primary}
          style={{ marginLeft: 'auto' }}
        />
      </View>
    </Pressable>
  );
};

export default MenuItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
