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

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);

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
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to Comments"
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
