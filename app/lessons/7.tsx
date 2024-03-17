import React, { useEffect } from "react";
import {
  Button,
  LayoutChangeEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SIZE = 120;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const width = useSharedValue(SIZE);
  const height = useSharedValue(SIZE);
  const color = useSharedValue("red");
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      backgroundColor: color.value,
    };
  });

  const handlePress = () => {
    width.value = withTiming(Math.random() * 300 + 1);
    height.value = withTiming(Math.random() * 300 + 1);
    color.value = withTiming(getRandomColor());
  };

  useEffect(() => {
    handlePress();
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </View>
        <Button title="click me" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
