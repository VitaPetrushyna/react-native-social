import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import db from "../../firebase/config";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState(null);

  const { userId, nickName } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to use the camera has been denied");
      }
    })();
  });

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //     }
  //   })();
  // });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    console.log("location", location);
    console.log("comment", comment);

    const { uri } = await camera.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync();
    // console.log("latitude", location.coords.latitude);
    // console.log("longitude", location.coords.longitude);

    setPhoto(uri);
    console.log("photo uri ", uri);
  };

  const sendPhoto = () => {
    uploadPostToServer();
    navigation.navigate("DefaultScreen", { photo });
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    const createPost = await db
      .firestore()
      .collection("posts")
      .add({ photo, comment, location: location.coords, userId, nickName });
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    await db.storage().ref(`postImage/${uniquePostId}`).put(file);

    const processedPhoto = await db
      .storage()
      .ref("postImage")
      .child(uniquePostId)
      .getDownloadURL();

    return processedPhoto;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
      <View>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 150, width: 200, borderRadius: 10 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
            <Image
              source={require("../../assets/camera.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
        </Camera>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              color: "#BDBDBD",
              fontSize: 16,
              marginBottom: 48,
              marginLeft: 16,
            }}
          >
            Завантажте фото
          </Text>
          <Text style={styles.text}>Назва</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={setComment} />
          </View>
          <Text style={styles.text}>Місцевість</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={setComment} />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
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
    backgroundColor: "#FFFFFF",
  },

  camera: {
    height: "40%",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    marginTop: 170,

    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingTop: 40,
    paddingBottom: 11,
    width: 400,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 16,
  },

  sendBtn: {
    marginHorizontal: 70,
    marginTop: 50,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  deleteBtn: {
    marginHorizontal: 150,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  inputContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    height: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "#20b2aa",
  },
});

export default CreatePostsScreen;
