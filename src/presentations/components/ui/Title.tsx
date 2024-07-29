import { globalStyles } from '@/src/config/theme';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}
const Title = ({ text, safe = false, white = false }: Props) => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
export default Title;
