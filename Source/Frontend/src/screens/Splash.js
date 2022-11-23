import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  topImage: {
    marginTop: 32,
    marginLeft: 20,
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ ...styles.topImage, color: theme.colors.primaryText }}>
          hi
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
