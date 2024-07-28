import { colors } from '@/src/config/theme';
import { PropsWithChildren } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const Card = ({ style, children }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
export default Card;
