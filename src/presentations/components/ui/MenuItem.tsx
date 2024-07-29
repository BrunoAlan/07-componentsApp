import { colors } from '@/src/config/theme';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Icon from '../../icons/Icon';
import { useNavigation, useRouter } from 'expo-router';
import Separator from './Separator';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const router = useRouter();
  const { colors } = useContext(ThemeContext);
  return (
    <>
      <Pressable onPress={() => router.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}
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
      {!isLast && <Separator />}
    </>
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
