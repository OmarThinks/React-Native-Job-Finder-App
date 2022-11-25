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

const JobCard = ({ job }) => {
  //console.log(job);
  const { id, employerImage, employerName, title, salary, location } = job;
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
        borderRadius: 20,
        backgroundColor: theme.colors.background,
        width: 260,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 15,
        }}
      >
        <Image
          source={{ uri: employerImage }}
          style={{
            width: 40,
            height: 40,
            marginLeft: 15,
            borderRadius: 13,
          }}
        />
        <Image
          source={require("../../shapes/Love.png")}
          style={{
            width: 28,
            height: 28,
            marginLeft: 20,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 5,
          marginLeft: 13,
          fontSize: 12,
          lineHeight: 12,
          fontWeight: "500",
          color: theme.colors.secondaryText,
        }}
      >
        {employerName}
      </Text>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 15,
          fontSize: 16,
          lineHeight: 16,
          fontWeight: "500",
          color: theme.colors.primaryText2,
        }}
      >
        {title}
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 18,
          marginLeft: 15,
          marginBottom: 22,
        }}
      >
        <Text
          style={{
            color: theme.colors.primaryText2,
            fontSize: 12,
            lineHeight: 12,
            fontWeight: "600",
          }}
        >
          ${salary}/m
        </Text>
        <Text
          style={{
            color: theme.colors.secondaryText,
            fontSize: 12,
            lineHeight: 12,
            fontWeight: "400",
            marginLeft: 5,
          }}
        >
          {location}
        </Text>
      </View>
    </View>
  );
};

export default JobCard;
