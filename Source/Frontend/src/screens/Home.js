import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centererView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ ...styles.centererView }}>
      <View>
        <Text>Universal React with Expo</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
