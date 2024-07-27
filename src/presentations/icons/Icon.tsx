import { Ionicons } from '@expo/vector-icons';

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
  style?: object;
  rest?: any;
}

const Icon = ({ name, color, size, style, rest }: Props) => {
  return (
    <Ionicons name={name} color={color} size={size} style={style} {...rest} />
  );
};
export default Icon;
