import React from "react";
import {
  Dimensions,
  ImageBackground,
  Linking,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error al descargar el archivo: ", err)
    );
  };

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
          onPress={() => navigation.navigate("Select")}
        >
          <View style={styles.playTop}>
            <Text style={styles.buttonText}>Jugar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Text style={styles.suggestionText}>Fes una sugerencia</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.creatorContainer}>
        <TouchableOpacity onPress={() => openLink("https://www.instagram.com/ericriiera/")}>
          <Ionicons name="logo-instagram" size={30} color="black" />
        </TouchableOpacity>
        <View style={{alignItems: "center"}}>
          <Text style={styles.creatorText}>Created by</Text>
          <Text style={styles.creatorText}>Eric Riera</Text>
        </View>
        <TouchableOpacity onPress={() => openLink("https://links-ericriera.netlify.app/")}>
          <Ionicons name="link-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "b1c6f4",
    alignItems: "center",
  },
  titleContainer: {
    flex: 2.2,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  creatorContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Horizon",
    fontSize: Dimensions.get("window").width * 0.28,
    color: "#000",
    marginVertical:
      Platform.OS === "ios" ? -13 : Dimensions.get("window").width * -0.075,
  },
  play: {
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 10,
    transform: [{ translateX: 5 }],
  },
  playTop: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
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
  creatorText: {
    fontFamily: "Horizon",
    fontSize: 14,
    color: "#000",
  },
});
