import { useTheme, Text, TextInput } from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput as TextIn,
} from "react-native";
import { useState } from "react";

import CustomTextInput from "../components/CustomTextInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const myTheme = {
  colors: {
    primary: "red",
    onPrimary: "red",
    primaryContainer: "red",
    onPrimaryContainer: "red",
    secondary: "red",
    onSecondary: "red",
    secondaryContainer: "red",
    onSecondaryContainer: "red",
    tertiary: "red",
    onTertiary: "red",
    tertiaryContainer: "red",
    onTertiaryContainer: "red",
    error: "red",
    onError: "red",
    errorContainer: "red",
    onErrorContainer: "red",
    background: "yellow",
    onBackground: "red",
    surface: "red",
    onSurface: "red",
    surfaceVariant: "red",
    onSurfaceVariant: "red",
    outline: "red",
    outlineVariant: "red",
    shadow: "red",
    scrim: "red",
    inverseSurface: "red",
    inverseOnSurface: "red",
    inversePrimary: "red",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 241, 250)",
      level2: "rgb(247, 234, 247)",
      level3: "rgb(244, 228, 244)",
      level4: "rgb(243, 226, 243)",
      level5: "rgb(241, 222, 241)",
    },
    surfaceDisabled: "red",
    onSurfaceDisabled: "red",
    backdrop: "red",
  },
};

const myTheme2 = {
  colors: {
    primary: "rgb(158, 42, 155)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(255, 215, 245)",
    onPrimaryContainer: "rgb(56, 0, 56)",
    secondary: "rgb(109, 88, 105)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(247, 218, 239)",
    onSecondaryContainer: "rgb(39, 22, 36)",
    tertiary: "rgb(130, 83, 69)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(255, 219, 209)",
    onTertiaryContainer: "rgb(50, 18, 8)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(30, 26, 29)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(30, 26, 29)",
    surfaceVariant: "rgb(238, 222, 231)",
    onSurfaceVariant: "rgb(78, 68, 75)",
    outline: "rgb(128, 116, 124)",
    outlineVariant: "rgb(209, 194, 203)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(52, 47, 50)",
    inverseOnSurface: "rgb(248, 238, 242)",
    inversePrimary: "rgb(255, 170, 243)",
    elevation: {
      level0: "transparent",
      level1: "rgb(250, 241, 250)",
      level2: "rgb(247, 234, 247)",
      level3: "rgb(244, 228, 244)",
      level4: "rgb(243, 226, 243)",
      level5: "rgb(241, 222, 241)",
    },
    surfaceDisabled: "rgba(30, 26, 29, 0.12)",
    onSurfaceDisabled: "rgba(30, 26, 29, 0.38)",
    backdrop: "rgba(55, 46, 52, 0.4)",
  },
};

const LogInScreen = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const EmailImage = () => (
    <Image
      style={{ width: 24, height: 24 }}
      source={require("../shapes/Email.png")}
    />
  );
  const element = <TextInput.Icon name="lock-outline" color={() => "red"} />;

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

        <CustomTextInput
          text={email}
          setText={setEmail}
          marginTop={30}
          label={"Email Adress"}
          left={EmailImage}
        />
        <CustomTextInput
          text={password}
          setText={setPassword}
          isPassword={true}
          marginTop={24}
          label={"Password"}
          left={null}
          right={null}
        />
        <TextInput
          label="TextInputWithIcon"
          left={
            <TextInput.Icon name="alert-circle" size={28} color={() => "red"} />
          }
          right={
            <TextInput.Icon name={"cellphone"} size={28} color={() => "blue"} />
          }
        />

        <TextInput
          label="Password"
          secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon
              name="eye"
              onPress={() => {
                setSecureTextEntry(!secureTextEntry);
                return false;
              }}
            />
          }
        />

        <TextInput
          label="Email"
          mode="outlined"
          style={{ backgroundColor: "transparent" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
          right={element}
          left={element}
        />

        <TextInput
          label="Password"
          secureTextEntry
          right={
            <TextInput.Icon
              icon={require("../shapes/Email.png")}
              color={() => "red"}
            />
          }
          left={<TextInput.Icon icon="eye" style={{ color: "red" }} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
