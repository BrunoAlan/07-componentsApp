import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { colors } from '@/src/config/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);

  const {
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    animatedOpacity,
    animatedTop,
  } = useAnimation();

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        style={{
          opacity: 1,
          marginTop: 10,
        }}
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ initialPosition: -100 });
        }}
      >
        <Text style={{ color: colors.text }}>Fadein</Text>
      </Pressable>

      <Pressable style={{ marginTop: 10 }} onPress={() => fadeOut({})}>
        <Text style={{ color: colors.text }}>Fadeout</Text>
      </Pressable>
    </View>
  );
};
export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
