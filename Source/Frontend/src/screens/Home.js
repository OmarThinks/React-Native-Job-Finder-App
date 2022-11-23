import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import {
  Card,
  Text,
  Paragraph,
  Button,
  Avatar,
  Title,
} from "react-native-paper";
const styles = StyleSheet.create({
  centererView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ ...styles.centererView }}>
      <View style={{ ...styles.centererView }}>
        <Text style={{ fontSize: 120 }}>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
