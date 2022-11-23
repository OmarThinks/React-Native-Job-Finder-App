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
    flex: 1,
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
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, ...styles.container }}
    >
      <ScrollView>
        <Text style={{ ...styles.topImage, color: theme.colors.primaryText }}>
          hi
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
