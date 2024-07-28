import { colors } from '@/src/config/theme';
import { Platform, StyleSheet, Switch, View, Text } from 'react-native';

interface Props {
  isOn: boolean;
  text?: string;

  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  return (
    <View style={styles.switchRow}>
      {!!text && <Text style={{ color: colors.text }}>{text}</Text>}
      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor='#3e3e3e'
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};
export default CustomSwitch;
const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
