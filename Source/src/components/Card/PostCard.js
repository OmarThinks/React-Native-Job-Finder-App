import { Text, useTheme, Avatar, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PostCard = ({ post }) => {
  //console.log(employerImage);
  const { employerImage, employerName, title, jobType, salary } = post;
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
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
      onPress={() => {
        navigation.navigate("InCallScreen");
      }}
    >
      <View style={{ marginLeft: 15, marginVertical: 15 }}>
        <Image
          source={{
            uri: employerImage,
          }}
          style={{ width: 50, height: 50, borderRadius: 15 }}
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
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            lineHeight: 12,
            fontWeight: "400",
            color: theme.colors.secondaryText,
          }}
        >
          {jobType}
        </Text>
      </View>
      <View
        style={{
          marginRight: 12,
        }}
      >
        <Text>${salary}/m</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;
