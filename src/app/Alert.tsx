import { StyleSheet, View, Alert as AlertComponent } from 'react-native';
import CustomView from '../presentations/components/ui/CustomView';
import { globalStyles } from '../config/theme';
import Button from '../presentations/components/ui/Button';
import Title from '../presentations/components/ui/Title';
const Alert = () => {
  const createTwoButtonAlert = () =>
    AlertComponent.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    AlertComponent.alert('Alert Title', 'My Alert Msg', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
    ]);

  const showPrompt = () =>
    //Native code
    AlertComponent.prompt(
      'Title',
      'Message',
      (text) => console.log(text),
      'secure-text'
    );
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text='Alers' />
      <View style={{ gap: 10 }}>
        <Button text='Alert - 2 Buttons' onPress={createTwoButtonAlert} />
        <Button text='Alert - 3 Buttons' onPress={createThreeButtonAlert} />
        <Button text='Alert - Promt' onPress={showPrompt} />
      </View>
    </CustomView>
  );
};
export default Alert;
const styles = StyleSheet.create({});
