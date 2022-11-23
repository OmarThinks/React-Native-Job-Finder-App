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
        <Text
          style={{
            marginLeft: 30,
            marginTop: 100,
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Log In
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
