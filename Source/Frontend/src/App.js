import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import { store } from "./app/store";
import SplashScreen from "./screens/Splash";
import { Provider } from "react-redux";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

import LogInScreen from "./screens/LogIn";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
    background2: "#FBFBFB",
    primaryText: "#1A1D1E",
    primaryText2: "#151313",
    buttonText: "#FFFFFF",
    secondaryText: "#6A6A6A",
    secondaryText2: "#A8A8AA",
    surface: "#4CA6A8",
    onSurface: "#1A1D1E",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInScreen"
              component={LogInScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
