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

import { useDispatch } from "react-redux";

import { authSignUpUser } from "../../redux/auth/authOperations";

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

const initialState = {
  email: "",
  password: "",
  nickname: "",
};

// const [fontsLoader] = useFonts({
//   "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
//   "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
// });

// useEffect(() => {
//   async function prepare() {
//     await SplashScreen.preventAutoHideAsync();
//   }
//   prepare();
// }, []);

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  // if (!fontsLoader) {
  //   return null;
  // } else {
  //   SplashScreen.hideAsync();
  // }

  const dispatch = useDispatch();

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      // Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authSignUpUser(state));
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/painting-mountains.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View style={styles.box}>
              <View>
                <Image
                  style={styles.photo}
                  source={require("../../assets/add-photo.png")}
                />
              </View>
              <View
                style={{
                  ...styles.form,
                  paddingBottom: isShowKeyboard ? 10 : 78,
                  width: dimensions,
                }}
              >
                <Text style={styles.title}>Реєстрація</Text>
                <View>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.nickname}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        nickname: value,
                      }))
                    }
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email}
                    onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    secureTextEntry={true}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btn}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                  style={{
                    marginTop: 16,
                    alignSelf: "center",
                  }}
                >
                  <Text style={styles.text}>
                    Вже є аккаунт?{" "}
                    <Text style={{ fontSize: 18, color: "#ff6347" }}>
                      Увійти
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    paddingTop: 32,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 50,
    borderRadius: 8,
    color: "#212121",
    backgroundColor: "#F6F6F6",
  },
  form: {},

  btn: {
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      },
    }),
  },
  btnTitle: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        color: "#FF6C00",
      },
      android: {
        color: "#f0f8ff",
      },
    }),
  },
  title: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },

  text: {
    color: "#1B4371",
    fontSize: 16,
  },
  photo: {
    position: "absolute",
    top: -150,
    left: 128,
    // marginLeft: 128,
    // marginRight: 128,
  },
});
