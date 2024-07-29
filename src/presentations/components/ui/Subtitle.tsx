import { globalStyles } from '@/src/config/theme';
import { useContext } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';
interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}
const Subtitle = ({ text, safe = false }: Props) => {
  const { colors } = useContext(ThemeContext);

  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: colors.cardBackground,
        color: colors.text,
      }}
    >
      {text}
    </Text>
  );
};
export default Subtitle;
