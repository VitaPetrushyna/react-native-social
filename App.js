import {} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";

import { useRoute } from "./router";
import { store } from "./redux/store";

export default function App() {
  const routing = useRoute(false);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
