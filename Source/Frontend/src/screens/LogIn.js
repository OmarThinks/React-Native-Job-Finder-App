import {
  useTheme,
  Text,
  TextInput,
  HelperText,
  Button,
} from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const EmailImage = <TextInput.Icon icon={require("../shapes/Email.png")} />;

  const PasswordImage = (
    <TextInput.Icon
      icon={require("../shapes/LockIcon.png")}
      style={{ borderRadius: 0 }}
    />
  );
  const CanSeePassword = (
    <TextInput.Icon
      icon={!isPasswordVisible ? "eye" : "eye-off"}
      style={{ borderRadius: 0 }}
      onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      color={() => theme.colors.secondaryText}
    />
  );
  const helperText = errorMessage ? (
    <HelperText type="error" visible={errorMessage} style={{ marginLeft: 30 }}>
      {errorMessage}
    </HelperText>
  ) : (
    <></>
  );

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
          error={errorMessage}
        />
        <CustomTextInput
          text={password}
          setText={setPassword}
          isPassword={!isPasswordVisible}
          marginTop={24}
          label={"Password"}
          left={PasswordImage}
          right={CanSeePassword}
          error={errorMessage}
        />

        {helperText}

        <Text
          style={{
            fontSize: 12,
            lineHeight: 12,
            textAlign: "right",
            marginRight: 20,
            marginTop: 10,
            color: theme.colors.secondaryText,
          }}
        >
          Forgot Password?
        </Text>
        <Button
          style={{ borderRadius: 12, marginHorizontal: 20, marginTop: 40 }}
          mode="contained"
          contentStyle={{ paddingVertical: 13 }}
          onPress={() => {}}
          labelStyle={{
            fontSize: 16,
            lineHeight: 16,
            color: theme.colors.buttonText,
          }}
        >
          LOG IN
        </Button>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            lineHeight: 16,
            color: theme.colors.secondaryText,
            marginTop: 40,
          }}
        >
          Or Continue with{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
