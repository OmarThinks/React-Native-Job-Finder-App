import { Text, useTheme, Avatar, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PostCard = ({ employerImage, employerName, title, jobType, salary }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.background,
        //backgroundColor: "red",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "rgb(64, 59, 75)",
        shadowOpacity: 0.1,
        shadowOffset: "0px 10px 35px -10px",
      }}
    >
      <View style={{ marginLeft: 15, marginVertical: 15 }}>
        <Image
          source={require("../../shapes/HomeSettingsIcon.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          marginLeft: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 16,
            fontWeight: "600",
            color: theme.colors.primaryText,
          }}
        >
          UI/UX Designer
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 12,
            fontWeight: "400",
            color: theme.colors.secondaryText,
          }}
        >
          Full Time
        </Text>
      </View>
      <View
        style={{
          marginRight: 12,
        }}
      >
        <Text>$4500/m</Text>
      </View>
    </View>
  );
};

export default PostCard;
