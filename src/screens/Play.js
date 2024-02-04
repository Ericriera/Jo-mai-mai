import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { database } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import NoItemsModal from "../components/NoItemsModal";

export default function Play() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "joMaiMai"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => {
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      getRandomIndex();
    }
  }, [mounted]);

  const getRandomIndex = () => {
    if (index !== null) {
      setItems((prevItems) => {
        const newItems = prevItems.filter((item, key) => key !== index);
        return newItems;
      });
    }
    if (items.length - 1 === 0) setModalVisible(true);
    const seed = new Date().getTime();
    const random = seed + Math.random();
    const randomIndex = Math.floor(random * items.length) % (items.length - 1);
    setIndex(randomIndex);
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Jo mai mai</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={
            items[index]?.tags.includes("x")
              ? require("../../assets/fire.png")
              : require("../../assets/star.png")
          }
        ></Image>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{items[index]?.item.cat}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.next}
          onPress={() => getRandomIndex()}
        >
          <View style={styles.nextTop}>
            <Text style={styles.buttonText}>Següent</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NoItemsModal modalVisible={modalVisible} />
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
  imageContainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1.5,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontFamily: "Horizon",
    fontSize: 30,
    marginVertical: 20,
    color: "#000",
  },
  text: {
    fontFamily: "Horizon",
    fontSize: 25,
    marginHorizontal: "10%",
    textAlign: "center",
    color: "#000",
  },
  next: {
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 10,
  },
  nextTop: {
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
    color: "#6495ed",
    textDecorationLine: "underline",
  },
});
