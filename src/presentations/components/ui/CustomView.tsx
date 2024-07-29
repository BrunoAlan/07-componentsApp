import { globalStyles } from '@/src/config/theme';
import { ReactNode, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  margin?: boolean;
}
const CustomView = ({ children, style, margin = false }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style,
      ]}
    >
      {children}
    </View>
  );
};
export default CustomView;
