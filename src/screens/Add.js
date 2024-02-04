import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { database } from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Add() {
  const navigation = useNavigation();
  const [newItem, setNewItem] = useState({
    type: "",
    item: "",
  });

  useLayoutEffect(() => {
    Platform.OS === "ios" &&
      navigation.setOptions({
        headerRight: () => (
          <Button
            title="Enviar"
            color="#000"
            onPress={onSend}
          />
        ),
        headerLeft: () => (
          <Button
            title="Cancelar"
            color="#000"
            onPress={() => navigation.goBack()}
          />
        ),
      });
  }, []);

  const onSend = async () => {
    await addDoc(collection(database, "suggestions"), newItem);
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setNewItem({ ...newItem, type: text })}
          placeholder="Tipus"
          placeholderTextColor="#999"
          selectionColor="#999"
          clearButtonMode="while-editing"
        />
        <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setNewItem({ ...newItem, item: text })}
          placeholder="Sugerencia"
          placeholderTextColor="#999"
          selectionColor="#999"
          clearButtonMode="while-editing"
        />
        {Platform.OS === "android" && (
          <TouchableOpacity style={styles.send} onPress={onSend}>
            <View style={styles.sendTop}>
              <Text style={styles.buttonText}>Enviar</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contentContainer: {
    flex: 0.41,
    width: "100%",
    alignItems: "center",
  },
  formContainer: {
    flex: 5,
    marginTop: Platform.OS === "android" ? 125 : 75,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "90%",
    padding: 10,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "2%",
    fontSize: 16,
    color: "#000",
  },
  send: {
    width: "90%",
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 50,
  },
  sendTop: {
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
});
