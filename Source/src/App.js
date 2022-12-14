import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './app/store';
import SplashScreen from './screens/Splash';

import {Provider} from 'react-redux';

import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import {SheetProvider} from 'react-native-actions-sheet';

import LogInScreen from './screens/LogIn';
import HomeScreen from './screens/Home';
import InCallScreen from './screens/InCall';
import MySheet from './components/Sheets/mysheet';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    background2: '#FBFBFB',
    primaryText: '#1A1D1E',
    primaryText2: '#151313',
    buttonText: '#FFFFFF',
    secondaryText: '#6A6A6A',
    secondaryText2: '#A8A8AA',
    surface: '#4CA6A8',
    onSurface: '#1A1D1E',
    sheetTop: '#E1E1E1',
    line: '#9E9E9E',

    primary: '#4CA6A8', //Input text inactive upper text color
    onSurfaceVariant: '#6A6A6A', // Input Text: Empty title color
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SheetProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="LogInScreen"
                component={LogInScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="InCallScreen"
                component={InCallScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SheetProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
