import { useTheme, Text, TextInput } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const LogInScreen = () => {
  const theme = useTheme();
  const [text, setText] = useState("");

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background2, ...styles.container }}
    >
      <ScrollView>
        <Text
          style={{
            marginLeft: 30,
            marginTop: 100,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: 30,
            fontStyle: "normal",
          }}
        >
          Welcome Back!
        </Text>

        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 24,
            marginLeft: 30,
            marginTop: 10,
            color: theme.colors.secondaryText,
          }}
        >
          Fill your details or continue with social media
        </Text>
        <TextInput
          label="Email Adress"
          value={text}
          onChangeText={(text) => setText(text)}
          style={{
            backgroundColor: theme.colors.background,
            borderRadius: 16,
            marginTop: 30,
            marginHorizontal: 20,
            fontSize: 16,
          }}
          theme={{
            ...theme,
            roundness: 16,
            colors: {
              ...theme.colors,
              primary: theme.colors.surface,
              onSurfaceVariant: theme.colors.secondaryText,
            },
          }}
          underlineStyle={{ height: 0 }}
          mode={"flat"}
          textColor={theme.colors.onSurface}
          left={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
