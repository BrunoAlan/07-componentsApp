import { globalStyles } from '@/src/config/theme';
import { useContext } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}
const Button = ({ text, styles, onPress }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        styles,
      ]}
    >
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};
export default Button;
