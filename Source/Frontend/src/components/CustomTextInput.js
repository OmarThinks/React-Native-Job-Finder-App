import { useTheme, Text, TextInput } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";

const CustomTextInput = ({
  text,
  setText,
  isPassword = false,
  marginTop,
  label,
  left,
  right = null,
}) => {
  const theme = useTheme();

  left = (
    <TextInput.Icon icon={require("../shapes/Email.png")} color={() => "red"} />
  );

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={(text) => setText(text)}
      style={{
        backgroundColor: theme.colors.background,
        borderRadius: 16,
        marginTop,
        marginHorizontal: 20,
        fontSize: 16,
      }}
      theme={{
        ...theme,
        roundness: 16,
      }}
      underlineStyle={{ height: 0 }}
      mode={"flat"}
      textColor={theme.colors.onSurface}
      left={left}
      right={left}
      secureTextEntry={isPassword}
    />
  );
};
export default CustomTextInput;
