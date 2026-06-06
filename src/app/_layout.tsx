import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Main" }}
      />
      <Stack.Screen
        name="auth"
        options={{ headerShown: false, title: "Authorization" }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false, title: "Login" }}
      />
      <Stack.Screen
        name="profile"
        options={{ headerShown: false, title: "Prifile" }}
      />
    </Stack>
  );
}


