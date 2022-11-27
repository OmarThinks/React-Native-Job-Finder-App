import { useTheme, Text, TextInput, HelperText } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { useState } from "react";

const CustomTextInput = ({
  text,
  onChangeText,
  isPassword = false,
  marginTop,
  label,
  left,
  right = null,
  error = null,
}) => {
  const theme = useTheme();

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={onChangeText}
      style={{
        backgroundColor: theme.colors.background,
        borderRadius: 16,
        marginTop,
        marginHorizontal: 20,
        fontSize: 16,
        marginBottom: 0,
      }}
      theme={{
        ...theme,
        roundness: 16,
      }}
      underlineStyle={{ height: 0 }}
      mode={"flat"}
      textColor={theme.colors.onSurface}
      left={left}
      right={right}
      secureTextEntry={isPassword}
      error={error}
    />
  );
};
export default CustomTextInput;
