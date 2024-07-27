import { colors } from '@/src/config/theme';
import { useRef } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Animated,
  Easing,
} from 'react-native';
const Animations101Screem = () => {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const animatedTop = useRef(new Animated.Value(-200)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('End fadein'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

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
        onPress={fadeIn}
      >
        <Text>Fadein</Text>
      </Pressable>

      <Pressable style={{ marginTop: 10 }} onPress={fadeOut}>
        <Text>Fadeout</Text>
      </Pressable>
    </View>
  );
};
export default Animations101Screem;

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
