import { globalStyles } from '@/src/config/theme';
import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  margin?: boolean;
}
const CustomView = ({ children, style, margin = false }: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        style,
      ]}
    >
      {children}
    </View>
  );
};
export default CustomView;
