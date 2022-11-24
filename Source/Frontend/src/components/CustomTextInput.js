import { useTheme, Text, TextInput } from "react-native-paper";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";

const CustomTextInput = ({ text, setText }) => {
  const theme = useTheme();

  return (
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
      }}
      underlineStyle={{ height: 0 }}
      mode={"flat"}
      textColor={theme.colors.onSurface}
      left={() => {}}
    />
  );
};
export default CustomTextInput;
