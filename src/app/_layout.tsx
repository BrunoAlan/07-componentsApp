import { Stack } from 'expo-router';
import { ThemeProvider } from '../presentations/context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        initialRouteName='index'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' />
        <Stack.Screen name='Animation101' />
        <Stack.Screen name='Animation102' />
        <Stack.Screen name='Switch' />
        <Stack.Screen name='ChangeTheme' />
      </Stack>
    </ThemeProvider>
  );
}
