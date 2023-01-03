import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PostsScreen = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingTop: 55,
    paddingBottom: 11,
    width: 400,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  icon: {
    textAlign: "right",
  },
});

export default PostsScreen;
