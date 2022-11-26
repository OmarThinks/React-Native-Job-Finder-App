import React, { useState } from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useTheme, Avatar, Button } from "react-native-paper";

const styles = StyleSheet.create({
  secondary18: {
    flex: 1,
  },
});

const NavButton = ({ text, activeTab, setActiveTab }) => {
  const active = text === activeTab;

  const theme = useTheme();

  const backgroundColor = active
    ? theme.colors.surface
    : theme.colors.background2;
  const textColor = active
    ? theme.colors.buttonText
    : theme.colors.secondaryText;

  return (
    <Button
      mode="contained"
      buttonColor={backgroundColor}
      textColor={textColor}
      onPress={() => {
        setActiveTab(text);
      }}
      contentStyle={{ height: 50, width: 123 }}
      style={{ borderRadius: 12, fontSize: 30 }}
    >
      <Text style={{ fontSize: 13, fontWeight: "500" }}>{text}</Text>
    </Button>
  );
};

function MySheet(props) {
  const payload = props.payload;
  const windowHeight = Dimensions.get("window").height;
  const maxTabHeight = windowHeight * 0.7;

  const [activeTab, setActiveTab] = useState("Description");

  const tabHeader =
    (activeTab === "Description" ? "Qualifications" : activeTab) + ":";

  const theme = useTheme();

  return (
    <ActionSheet id={props.sheetId}>
      <View style={{ maxHeight: maxTabHeight }}>
        <ScrollView>
          <View
            style={{
              backgroundColor: theme.colors.background2,
              alignItems: "center",
              borderRadius: 5,
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
              style={{ width: 70, height: 70, borderRadius: 20, marginTop: 32 }}
            />

            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                lineHeight: 20,
                color: theme.colors.primaryText,
                marginTop: 20,
              }}
            >
              UI Design Lead
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 22,
              }}
            >
              <Text
                style={{
                  color: theme.colors.primaryText,
                  fontWeight: "500",
                  fontSize: 14,
                }}
              >
                Spotify
              </Text>
              <View
                style={{
                  width: 15,
                  height: 0,
                  borderWidth: 1.5,
                  borderColor: theme.colors.primaryText,
                  marginLeft: 7,
                }}
              />
              <Image
                source={require("../../shapes/Location.png")}
                style={{ width: 11.5, height: 13.7, marginLeft: 13.8 }}
                resizeMode={"contain"}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: theme.colors.secondaryText,
                  marginLeft: 8.3,
                }}
              >
                Toronto Canada
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                marginTop: 31,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../shapes/Watch.png")}
                  style={{ width: 20, height: 20 }}
                  resizeMode={"contain"}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    fontWeight: "400",
                    fontSize: 18,
                    color: theme.colors.secondaryText,
                  }}
                >
                  Full Time
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 18,
                  color: theme.colors.secondaryText,
                }}
              >
                $1200/m
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 31,
                justifyContent: "space-between",
                paddingHorizontal: 20,
                width: "100%",
              }}
            >
              <NavButton
                text={"Description"}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavButton
                text={"Company"}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <NavButton
                text={"Reviews"}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </View>

            <Text
              style={{
                alignSelf: "flex-start",
                marginTop: 40,
                fontSize: 18,
                fontWeight: "500",
                color: theme.colors.primaryText,
                marginLeft: 20,
              }}
            >
              {tabHeader}
            </Text>
          </View>
        </ScrollView>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet("mysheet", MySheet);

export default MySheet;
