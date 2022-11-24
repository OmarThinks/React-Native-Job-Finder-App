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

const LogInScreen = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const EmailImage = <TextInput.Icon icon={require("../shapes/Email.png")} />;

  const PasswordImage = (
    <TextInput.Icon
      icon={require("../shapes/LockIcon.png")}
      style={{ borderRadius: 0 }}
    />
  );

  const element = <TextInput.Icon name="lock-outline" color={() => "red"} />;

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
          left={PasswordImage}
          right={null}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;