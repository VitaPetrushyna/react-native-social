import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/painting-mountains.jpg")}
      >
        <View style={styles.box}>
          <View>
            <Image
              style={styles.photo}
              source={require("../../assets/add-photo.png")}
            />
          </View>
          <View>
            <Text style={styles.title}>Прізвище Ім`я</Text>
            <View style={styles.takePhotoContainer}>
              <Text style={{ color: "#BDBDBD", fontSize: 20 }}>Фото</Text>
            </View>
            <Text style={styles.text}>Назва</Text>
            <View style={styles.icons}>
              <Image
                style={styles.icon}
                source={require("../../assets/Shape.png")}
              />

              <Image
                style={styles.icon}
                source={require("../../assets/thumbs-up.png")}
              />

              <Image
                style={styles.icon}
                source={require("../../assets/map-pin.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,

    height: 665,
    width: 420,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },

  title: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
  },

  text: {
    color: "#212121",
    fontSize: 16,
    marginTop: 8,
  },
  photo: {
    position: "absolute",
    top: -150,
    right: -70,
  },
  takePhotoContainer: {
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
  icon: {
    width: 20,
    height: 20,
  },
  icons: {},
});

export default ProfileScreen;
