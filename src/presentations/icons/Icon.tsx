import { colors } from '@/src/config/theme';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, TextStyle } from 'react-native';

interface Props {
  name: keyof typeof Ionicons.defaultProps;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  rest?: any;
}

const Icon = ({
  name,
  color = colors.text,
  size = 24,
  style,
  ...rest
}: Props) => {
  return (
    <Ionicons name={name} color={color} size={size} style={style} {...rest} />
  );
};
export default Icon;
