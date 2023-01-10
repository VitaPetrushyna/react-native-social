import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import db from "../../firebase/config";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPost = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <MaterialIcons
            style={styles.icon}
            name="logout"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.boxPhoto}>
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200, borderRadius: 10 }}
            />
          </View>
        )}
      />
      <Button
        title="Перейти до карти"
        onPress={() => navigation.navigate("Map")}
      />
      <Button
        title="Додати коментарій"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingTop: 40,
    paddingBottom: 5,
    marginBottom: 5,
    width: 400,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    textAlign: "right",
  },
  boxPhoto: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DefaultScreenPosts;
