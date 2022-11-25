import {
  Text,
  useTheme,
  Avatar,
  TextInput,
  BottomNavigation,
  MD3LightTheme,
  Button,
} from "react-native-paper";
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
import { useEffect, useState } from "react";
import usersSlice from "../features/users/usersSlice";
import PostCard from "../components/Card/PostCard";
import { selectPosts } from "../features/posts/postsSlice";

import JobCard from "../components/Card/JobCard";
import { selectJobs } from "../features/jobs/jobsSlice";

import { SheetManager } from "react-native-actions-sheet";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: "10%",
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
  navBarIcon: { width: 19, height: 20, backgroundColor: "transparent" },
});

const HomeRoute = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const posts = useSelector(selectPosts);
  //console.log(posts);
  const currentUser = useSelector(selectCurrentUser);
  const jobs = useSelector(selectJobs);

  /*
  useEffect(() => {
    if (currentUser === null) navigation.navigate("LogInScreen");
  }, []);
*/
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

  const displayPosts = posts.map((post) => {
    return <PostCard key={post.id} post={post} />;
  });

  const displayJobs = jobs.map((job) => {
    return <JobCard key={job.id} job={job} />;
  });

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
        ></View>

        <ScrollView
          horizontal={true}
          style={{ marginTop: 20, paddingRight: 20, paddingBottom: 15 }}
        >
          {displayJobs}
          <View style={{ paddingLeft: 20 }}></View>
        </ScrollView>

        <View
          style={{
            ...styles.separator,
            marginTop: 15,
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
          {displayPosts}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MessageRoute = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.placeholderContainer,
        backgroundColor: theme.colors.background2,
      }}
    >
      <Text style={{ fontSize: 40 }}>Message</Text>
      <ChatActive size={80} />
      <ChatIdle size={80} />
    </View>
  );
};

const ProfileRoute = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        ...styles.placeholderContainer,
        backgroundColor: theme.colors.background2,
      }}
    >
      <Text style={{ fontSize: 40 }}>Message</Text>
      <ProfileActive size={80} />
      <ProfileIdle size={80} />
    </View>
  );
};

const SettingsRoute = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        ...styles.placeholderContainer,
        backgroundColor: theme.colors.background2,
      }}
    >
      <Text style={{ fontSize: 40 }}>Message</Text>
      <SettingActive size={80} />
      <SettingIdle size={80} />
      <Button
        onPress={() => {
          SheetManager.show("mysheet");
        }}
      >
        Hi
      </Button>
    </View>
  );
};

const HomeActive = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/HomeActive.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const HomeIdle = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/HomeIdle.png")}
      style={{ ...styles.navBarIcon, ...more }}
    />
  );
};

const ChatActive = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/ChatActive.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const ChatIdle = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/ChatIdle.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const ProfileActive = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/ProfileActive.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const ProfileIdle = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/ProfileIdle.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const SettingActive = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/SettingActive.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const SettingIdle = ({ size }) => {
  const more = size ? { width: size, height: size } : {};
  return (
    <Image
      source={require("../shapes/NavBar/SettingIdle.png")}
      style={{ ...styles.navBarIcon, ...more }}
      resizeMode="contain"
    />
  );
};

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: HomeActive,
      unfocusedIcon: HomeIdle,
      badge: false,
    },
    {
      key: "message",
      title: "Message",
      focusedIcon: ChatActive,
      unfocusedIcon: ChatIdle,
      badge: false,
    },
    {
      key: "profile",
      title: "Profile",
      focusedIcon: ProfileActive,
      unfocusedIcon: ProfileIdle,
      badge: false,
    },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: SettingActive,
      unfocusedIcon: SettingIdle,
      badge: false,
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    message: MessageRoute,
    profile: ProfileRoute,
    settings: SettingsRoute,
  });
  const theme = useTheme();

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: theme.colors.background }}
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          secondaryContainer: theme.colors.background,
        },
      }}
    />
  );
};

export default HomeScreen;
