import React, { useCallback, useEffect } from "react";
import {
  Appearance,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import SvgComponent from "../../assets/svg/Header";

export default function Home() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Horizon: require("../../assets/fonts/horizon.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) await hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Jo mai mai</Text>
      </View>
      <View style={styles.contentContainer}>
        <SvgComponent height={"33%"} width={"105%"} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.play}
          onPress={() => navigation.navigate("Play")}
        >
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Text style={styles.suggestionText}>Fes una sugerencia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#6495ed",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2.5,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Horizon",
    fontSize: Platform.OS === "ios" ? 30 : 40,
    fontWeight: "bold",
    color: Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
    marginTop: Platform.OS === "ios" ? 40 : "8%",
  },
  play: {
    width: "80%",
    backgroundColor: "#6495ed",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
  },
  suggestionText: {
    fontSize: 16,
    color: "#6495ed",
    textDecorationLine: "underline",
  },
});
