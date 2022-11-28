import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {
  Card,
  Text,
  Paragraph,
  Button,
  Avatar,
  Title,
  useTheme,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    marginTop: 30,
    marginLeft: 20,
    width: 23,
    height: 25.82,
  },
  businessManDrawing: {
    width: 472,
    height: 378,
    alignSelf: 'center',
  },
  primaryText: {
    paddingHorizontal: '17%',
    textAlign: 'center',
    width: '100%',
    marginTop: 62,
    fontSize: 34,
    lineHeight: 44,
    fontWeight: '600',
  },
  secondaryText: {
    paddingHorizontal: '9.3%',
    textAlign: 'center',
    width: '100%',
    marginTop: 5,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '400',
  },
  button: {
    marginVertical: 40,
    marginHorizontal: '15.2%',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
  },
  rightArrow: {width: 16.67, height: 10.67},
});

const SplashScreen = () => {
  const theme = useTheme();

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{backgroundColor: theme.colors.background, ...styles.container}}>
      <ScrollView>
        <Image
          style={{...styles.tinyLogo}}
          source={require('../shapes/Logo.png')}
        />
        <Image
          style={{
            ...styles.businessManDrawing,
          }}
          source={require('../shapes/SplashScreenBusinessMan.png')}
          resizeMode={'center'}
        />
        <Text style={{...styles.primaryText}}>Find a Perfect Job Match</Text>

        <Text
          style={{
            ...styles.secondaryText,
            color: theme.colors.secondaryText,
          }}>
          Finding your dream job is more easire and faster with JobHub
        </Text>
        <Button
          mode="contained-tonal"
          style={{...styles.button}}
          buttonColor={theme.colors.surface}
          onPress={() => {
            navigation.navigate('LogInScreen');
          }}
          contentStyle={{paddingVertical: 9}}>
          <Text
            style={{
              color: theme.colors.buttonText,
              ...styles.buttonText,
            }}>
            Let's Get Started
          </Text>
          <Image
            style={{...styles.rightArrow}}
            source={require('../shapes/RightArrowSplashScreen.png')}
          />
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
