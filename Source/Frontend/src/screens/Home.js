import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/currentUser/currentUserSlice";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser === null) navigation.navigate("LogInScreen");
  }, []);

  console.log("user is: ");
  console.log(currentUser);

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.background2, ...styles.container }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <Text>Home1</Text>
          <Text>Home2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
