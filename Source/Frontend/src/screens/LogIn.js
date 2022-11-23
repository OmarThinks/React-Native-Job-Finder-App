import { useTheme, Text } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const LogInScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background, ...styles.container }}
    >
      <ScrollView>
        <Text>Log In</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
