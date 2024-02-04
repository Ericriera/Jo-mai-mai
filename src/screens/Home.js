import React, { useCallback } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Jo</Text>
        <Text style={styles.title}>mai</Text>
        <Text style={styles.title}>mai</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          style={styles.play}
          onPress={() => navigation.navigate("Play")}
        >
          <View style={styles.playTop}>
            <Text style={styles.buttonText}>Jugar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Text style={styles.suggestionText}>Fes una sugerencia</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1.5,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Horizon",
    fontSize: Dimensions.get("window").width * 0.28,
    color: "#000",
    marginVertical: Platform.OS === 'ios' ? -13 : Dimensions.get("window").width * -0.075,
  },
  play: {
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 10,
  },
  playTop: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    transform: [{ translateX: -5 }, { translateY: -5 }],
  },
  buttonText: {
    fontFamily: "Horizon",
    fontSize: 25,
    color: "#000",
  },
  suggestionText: {
    fontFamily: "Horizon",
    fontSize: 14,
    color: "#000",
    textDecorationLine: "underline",
  },
});
