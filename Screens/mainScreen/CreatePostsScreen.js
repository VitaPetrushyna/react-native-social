import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View>
        <View style={styles.takePhotoContainer}>
          <Image
            source={require("../../assets/camera.png")}
            style={{ height: 60, width: 60, borderRadius: 10 }}
          />
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={{ color: "#BDBDBD", fontSize: 16, marginBottom: 48 }}>
            Завантажте фото
          </Text>
          <Text style={styles.text}>Назва</Text>
          <View style={styles.line}></View>
          <Text style={styles.text}>Місцевість</Text>
          <View style={styles.line}></View>
        </View>
        <View>
          <TouchableOpacity style={styles.sendBtn}>
            <Text style={styles.sendLabel}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.deleteBtn}>
            <Image
              source={require("../../assets/trash-2.png")}
              style={{ height: 30, width: 20, borderRadius: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
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
  //   camera: {
  //     height: "70%",
  //     marginHorizontal: 2,
  //     marginTop: 40,
  //     borderRadius: 10,
  //     alignItems: "center",
  //     justifyContent: "flex-end",
  //   },

  takePhotoContainer: {
    // position: "absolute",
    // top: 50,
    // left: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    width: 343,
    height: 240,
    backgroundColor: "#E8E8E8",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 15,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
    marginBottom: 32,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 51,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  deleteBtn: {
    marginHorizontal: 120,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
});

export default CreatePostsScreen;
