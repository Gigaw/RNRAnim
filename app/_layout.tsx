import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="lessons/1" />
    </Stack>
  );
};

export default RootLayout;
