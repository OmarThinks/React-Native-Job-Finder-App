import { View, Text, ScrollView, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
