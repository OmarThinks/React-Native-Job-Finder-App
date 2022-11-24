import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background2, ...styles.container }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <Text>Home1</Text>
          <Text>Home2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
