import React, { useLayoutEffect, useState } from "react";
import {
  Appearance,
  Button,
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
import SvgComponent from "../../assets/svg/Header";

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
            color={Appearance.getColorScheme() === "dark" ? "#000" : "#fff"}
            onPress={onSend}
          />
        ),
        headerLeft: () => (
          <Button
            title="Cancelar"
            color={Appearance.getColorScheme() === "dark" ? "#000" : "#fff"}
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
    <View style={styles.container}>
      {Platform.OS === "ios" && (
        <View style={styles.contentContainer}>
          <SvgComponent height={"100%"} width={"105%"} />
        </View>
      )}
      <View style={styles.formContainer}>
        {/* <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setNewItem({ ...newItem, type: text })}
          placeholder="Tipus"
          clearButtonMode="while-editing"
        /> */}
        <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setNewItem({ ...newItem, item: text })}
          placeholder="Sugerencia"
          placeholderTextColor="#333"
          clearButtonMode="while-editing"
        />
        {Platform.OS === "android" && (
          <TouchableOpacity style={styles.send} onPress={onSend}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        )}
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
  contentContainer: {
    flex: 0.41,
    width: "100%",
    alignItems: "center",
  },
  formContainer: {
    flex: 5,
    marginTop: Platform.OS === "android" ? 50 : 0,
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
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "2%",
    fontSize: 16,
    color: Appearance.getColorScheme() === "dark" ? "#fff" : "#000",
  },
  send: {
    width: "90%",
    backgroundColor: "#6495ed",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 50,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: Appearance.getColorScheme() === "dark" ? "#000" : "#fff",
  },
});
