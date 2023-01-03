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

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

const initialState = {
  name: "",
  email: "",
  password: "",
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

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  // if (!fontsLoader) {
  //   return null;
  // } else {
  //   SplashScreen.hideAsync();
  // }

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

  const keyboarInitialdHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/images/painting-mountains.jpg")}
        >
          <View>
            <Image
              style={styles.photo}
              source={require("../../assets/add-photo.png")}
            />
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View style={styles.box}>
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
                    value={state.name}
                    onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, name: value }))
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
                  onPress={keyboarInitialdHide}
                >
                  <Text style={styles.btnTitle}>Зареєструватися</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
    color: "#212121",
    textAlign: "center",
    marginTop: 16,
  },
  photo: {
    marginLeft: 128,
    marginRight: 128,
  },
});
