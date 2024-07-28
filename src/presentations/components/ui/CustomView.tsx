import { globalStyles } from '@/src/config/theme';
import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
const CustomView = ({ children, style }: Props) => {
  return <View style={[globalStyles.globalMargin, style]}>{children}</View>;
};
export default CustomView;
