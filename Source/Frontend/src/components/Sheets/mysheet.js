import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Image } from "react-native";
import { useTheme, Avatar } from "react-native-paper";

function MySheet(props) {
  const payload = props.payload;

  const theme = useTheme();

  return (
    <ActionSheet id={props.sheetId}>
      <View
        style={{
          backgroundColor: theme.colors.background2,
          alignItems: "center",
          borderRadius: 40,
        }}
      >
        <View
          style={{
            width: 80,
            height: 4,
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: theme.colors.sheetTop,
          }}
        ></View>

        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
          }}
          style={{ width: 40, height: 40, borderRadius: 20, marginTop: 32 }}
        />

        <Text>Upper Image</Text>
        <Text>UI Design Lead</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Spotify</Text>
          <Text>Dash</Text>
          <Text>LocationSign</Text>
          <Text>Toronto Canada</Text>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Hour</Text>
          <Text>Full Time</Text>
          <Text>$1200/m</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Description</Text>
          <Text>Company</Text>
          <Text>Reviews</Text>
        </View>

        <Text style={{ alignSelf: "flex-start" }}>Qualifications</Text>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet("mysheet", MySheet);

export default MySheet;
