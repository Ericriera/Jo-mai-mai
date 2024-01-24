import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { database } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import SvgComponent from "../../assets/svg/Header";
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
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <SvgComponent height={"95%"} width={"105%"} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Jo mai mai</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{items[index]?.item.cat}</Text>
      </View>
      <View style={{ flex: 1.5 }}>
        <TouchableOpacity style={styles.next} onPress={() => getRandomIndex()}>
          <Text style={styles.buttonText}>Següent</Text>
        </TouchableOpacity>
      </View>
      <NoItemsModal modalVisible={modalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contentContainer: {
    flex: 0.29,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
    marginVertical: 20,
  },
  text: {
    fontSize: 28,
    marginHorizontal: "10%",
    textAlign: "center",
  },
  next: {
    backgroundColor: "#6495ed",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  suggestionText: {
    color: "#6495ed",
    textDecorationLine: "underline",
  },
});
