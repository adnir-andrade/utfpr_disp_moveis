import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: "Home",
        headerStyle: {
          backgroundColor: "#cda882",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="dm/index" options={{ title: "DM View" }} />
      <Stack.Screen name="player/[id]" options={{ title: "Player View" }} />
    </Stack>
  );
}
