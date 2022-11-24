import { Text, useTheme, Avatar, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
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
  image54: {
    width: 54,
    height: 54,
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

          <Avatar.Image
            size={44}
            source={{
              uri: currentUser.image,
            }}
          />
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
          <Text>Popular Jobs</Text>
          <Text>Show All</Text>
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
            justifyContent: "center",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <Text style={{ backgroundColor: "red" }}>Popular Jobs</Text>
          <Text>Show All</Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 20 }}>
          <Text style={{ backgroundColor: "red" }}>T1</Text>
          <Text>T2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return <HomeTab />;
};

export default HomeScreen;
