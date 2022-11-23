import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import {
  Card,
  Text,
  Paragraph,
  Button,
  Avatar,
  Title,
  useTheme,
} from "react-native-paper";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    marginTop: 40,
    marginLeft: 20,
    width: 23,
    height: 25.82,
  },
  businessManDrawing: {
    width: 472,
    height: 378,
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, ...styles.container }}
    >
      <ScrollView>
        <Image
          style={{ ...styles.tinyLogo }}
          source={require("../shapes/Logo.png")}
        />
        <Image
          style={{
            ...styles.businessManDrawing,
            alignSelf: "center",
            overflow: "hidden",
          }}
          source={require("../shapes/SplashScreenBusinessMan.png")}
          resizeMode={"center"}
        />
        <Text>Hi</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
