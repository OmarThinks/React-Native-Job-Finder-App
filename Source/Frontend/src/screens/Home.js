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
import { selectCurrentUser } from "../features/currentUser/currentUserSlice";
import { useEffect } from "react";
import usersSlice from "../features/users/usersSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputText: {
    flexGrow: 1,
    marginRight: 15,
  },

  image44: {
    width: 44,
    height: 44,
  },
  image50: {
    width: 50,
    height: 50,
  },
  image54: {
    width: 54,
    height: 54,
  },
  popularJob: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
  },
});

const HomeTab = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser === null) navigation.navigate("LogInScreen");
  }, []);

  //console.log("user is: ");
  //console.log(currentUser);

  const userImage = currentUser ? (
    <Avatar.Image
      size={44}
      source={{
        uri: currentUser.image,
      }}
    />
  ) : (
    <></>
  );

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background2, ...styles.container }}
    >
      <ScrollView>
        <View
          style={{
            ...styles.separator,
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <Image
            source={require("../shapes/HomeTopLeftIcon.png")}
            style={{ ...styles.image44 }}
          />
          {userImage}
        </View>

        <View
          style={{
            ...styles.separator,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          <TextInput
            label={"Search Here ..."}
            style={{
              ...styles.inputText,
              backgroundColor: theme.colors.background,
              borderRadius: 15,
            }}
            theme={{ ...theme, roundness: 15 }}
            underlineStyle={{ height: 0 }}
            textColor={theme.colors.primaryText}
          />
          <Image
            source={require("../shapes/HomeSettingsIcon.png")}
            style={{ ...styles.image54 }}
          />
        </View>

        <View
          style={{
            ...styles.separator,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...styles.popularJob,
              color: theme.colors.primaryText,
            }}
          >
            Popular Jobs
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: theme.colors.secondaryText,
              alignSelf: "center",
            }}
          >
            Show All
          </Text>
        </View>

        <View
          style={{
            ...styles.separator,
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <Text>Horizontal List</Text>
          <Text>Horizontal List</Text>
        </View>

        <View
          style={{
            ...styles.separator,
            marginTop: 30,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              ...styles.popularJob,
              color: theme.colors.primaryText,
            }}
          >
            Recent Post
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "400",
              color: theme.colors.secondaryText,
              alignSelf: "center",
            }}
          >
            Show All
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }}>
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
                source={require("../shapes/HomeSettingsIcon.png")}
                style={{ ...styles.image50 }}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return <HomeTab />;
};

export default HomeScreen;
