import { ScrollView, Text, TextInput, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import { globalStyles } from '@/src/config/theme';
import { useState } from 'react';
const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView
      keyboardDismissMode='interactive'
      automaticallyAdjustKeyboardInsets
    >
      <CustomView margin>
        <Title safe text='Text inpunts' />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder='Full name'
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholderTextColor='black'
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <TextInput
            style={globalStyles.input}
            placeholder='Email'
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType='email-address'
            placeholderTextColor='black'
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <TextInput
            style={globalStyles.input}
            placeholder='Phone'
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholderTextColor='black'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>
        <View style={{ marginBottom: 10 }} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <TextInput
          style={globalStyles.input}
          placeholder='Other'
          autoCapitalize={'words'}
          autoCorrect={false}
          placeholderTextColor='black'
          onChangeText={(value) => setForm({ ...form, phone: value })}
        />
      </CustomView>
    </ScrollView>
  );
};
export default TextInputsScreen;
