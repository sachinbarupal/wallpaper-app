import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(stack)/account_info"
          options={{ headerShown: true, headerTitle: "Account Info" }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
