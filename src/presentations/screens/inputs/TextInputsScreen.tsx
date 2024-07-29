import { ScrollView, Text, TextInput, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Card from '../../components/ui/Card';
import { globalStyles } from '@/src/config/theme';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const TextInputsScreen = () => {
  const { colors, isDark } = useContext(ThemeContext);

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
            style={[
              globalStyles.input,
              {
                color: colors.text,
              },
            ]}
            placeholder='Full name'
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholderTextColor={colors.text}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <TextInput
            style={[
              globalStyles.input,
              {
                color: colors.text,
              },
            ]}
            placeholder='Email'
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType='email-address'
            placeholderTextColor={colors.text}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <TextInput
            style={[
              globalStyles.input,
              {
                color: colors.text,
              },
            ]}
            placeholder='Phone'
            autoCapitalize={'words'}
            autoCorrect={false}
            placeholderTextColor={colors.text}
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>
        <View style={{ marginBottom: 10 }} />
        <Card>
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 2)}
          </Text>
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 2)}
          </Text>
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 2)}
          </Text>
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 2)}
          </Text>
          <Text style={{ color: colors.text }}>
            {JSON.stringify(form, null, 2)}
          </Text>
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
