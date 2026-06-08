import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Main" }}
      />
      <Stack.Screen
        name="menu"
        options={{ headerShown: false, title: "Menu" }}
      />
    </Stack>
  );
}
