import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Appearance } from "react-native";
import Home from "./screens/Home";
import Play from "./screens/Play";
import Add from "./screens/Add";

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#6495ed" },
        }}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          title: "Jugar",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#6495ed" },
          headerTintColor:
            Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          title: "Sugerencia",
          presentation: "modal",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#6495ed" },
          headerTintColor:
            Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
