import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import QuestionButton from "../components/QuestionButton";

export default function Home() {
  const navigation = useNavigation();
  const [chillSelected, setChillSelected] = useState(false);
  const [xSelected, setXSelected] = useState(false);

  const onPressPlay = () => {
    const selection = [];
    if (chillSelected) selection.push("chill");
    if (xSelected) selection.push("x");

    if (selection.length > 0) {
      navigation.navigate("Play", {
        selection: selection,
      });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Escull les preguntes</Text>
      </View>
      <View style={{ flex: 2, marginHorizontal: "5%" }}>
        <View style={styles.selectContainer}>
          <QuestionButton
            text="Chill"
            image={require("../../assets/star.png")}
            isSelected={chillSelected}
            setIsSelected={setChillSelected}
          />
          <QuestionButton
            text="X"
            image={require("../../assets/fire.png")}
            isSelected={xSelected}
            setIsSelected={setXSelected}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.play} onPress={onPressPlay}>
          <View style={styles.playTop}>
            <Text style={styles.buttonText}>Jugar</Text>
          </View>
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
    flex: 1,
    justifyContent: "flex-end",
  },
  selectContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Horizon",
    fontSize: 30,
    marginVertical: 20,
    color: "#000",
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
    borderColor: "#000",
    borderWidth: 1,
    transform: [{ translateX: -5 }, { translateY: -5 }],
  },
  buttonText: {
    fontFamily: "Horizon",
    fontSize: 25,
    color: "#000",
  },
});
