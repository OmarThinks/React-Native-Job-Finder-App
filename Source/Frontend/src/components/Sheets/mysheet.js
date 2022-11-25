import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";

function MySheet(props) {
  const payload = props.payload;

  const theme = useTheme();

  return (
    <ActionSheet id={props.sheetId}>
      <View
        style={{
          backgroundColor: theme.colors.background2,
          alignItems: "center",
        }}
      >
        <Text>Upper Border</Text>
        <Text>Upper Image</Text>
        <Text>UI Design Lead</Text>
        <Text>Spotify</Text>
        <Text>Full Time</Text>
        <Text>Description</Text>
        <Text style={{ alignSelf: "flex-start" }}>Qualifications</Text>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet("mysheet", MySheet);

export default MySheet;
