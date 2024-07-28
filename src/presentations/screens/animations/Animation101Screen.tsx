import { colors } from '@/src/config/theme';
import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    animatedOpacity,
    animatedTop,
  } = useAnimation();

  return (
    <View style={styles.container}>
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
        <Text>Fadein</Text>
      </Pressable>

      <Pressable style={{ marginTop: 10 }} onPress={() => fadeOut({})}>
        <Text>Fadeout</Text>
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
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
