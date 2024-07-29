import { Modal, Platform, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import { useState } from 'react';
const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title safe text='Modal' />
      <Button text='Open Modal' onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType='slide'>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title safe text='Modal Content' />
          </View>
          <View style={{ flex: 1 }} />
          <Button
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
            text='Close Modal'
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
export default ModalScreen;
