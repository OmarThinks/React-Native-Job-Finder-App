import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

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
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
