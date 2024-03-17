import { Button, StyleSheet, Text, View } from "react-native";
import Animated, { withSpring } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

export default function FirstLessonPage() {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: width,
          height: 100,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
