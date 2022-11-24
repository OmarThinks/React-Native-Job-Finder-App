import {
  useTheme,
  Text,
  TextInput,
  HelperText,
  Button,
} from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from "react-native";
import { useState } from "react";

import CustomTextInput from "../components/CustomTextInput";

import { validateLogin } from "../features/users/functions";

import { useSelector } from "react-redux";
import { selectUsers } from "../features/users/usersSlice";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ceterverView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  alternativeLogin: {
    width: 60,
    height: 60,
  },
});

const LogInScreen = () => {
  const users = useSelector(selectUsers);

  console.log(validateLogin("harveyspectere@gmail.com", "12345", users));

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

  const onChangeEmail = (text) => {
    setEmail(text);
    setErrorMessage("");
  };
  const onChangePassword = (text) => {
    setPassword(text);
    setErrorMessage("");
  };

  const onSubmit = () => {
    const loginResult = validateLogin(email, password, users);
    if (loginResult === null) {
      setErrorMessage("Wrong Email or Password");
      return;
    }
    console.log("Logged in sucessfully");
  };

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
          onChangeText={onChangeEmail}
          marginTop={30}
          label={"Email Adress"}
          left={EmailImage}
          error={errorMessage}
        />
        <CustomTextInput
          text={password}
          onChangeText={onChangePassword}
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
          onPress={onSubmit}
          labelStyle={{
            fontSize: 16,
            lineHeight: 16,
            color: theme.colors.buttonText,
            fontWeight: "500",
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
            fontWeight: "400",
          }}
        >
          Or Continue with
        </Text>
        <View
          style={{
            ...styles.ceterverView,
            marginTop: 30,
          }}
        >
          <Image
            style={{ ...styles.alternativeLogin }}
            source={require("../shapes/Google.png")}
          />
          <Image
            style={{ ...styles.alternativeLogin, marginLeft: 20 }}
            source={require("../shapes/Facebook.png")}
          />
        </View>

        <View
          style={{ ...styles.ceterverView, marginTop: 40, marginBottom: 70 }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 26,
              color: theme.colors.secondaryText,
              fontWeight: "500",
            }}
          >
            New User?
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 26,
              fontWeight: "500",
              marginLeft: 7,
            }}
          >
            Create Account
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
