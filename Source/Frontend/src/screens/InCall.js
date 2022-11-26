import { Image, SafeAreaView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const InCallScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: "100%" }}>
        <Image
          source={require("../shapes/People/01.png")}
          resizeMethod={"scale"}
          style={{ width: "100%", height: "100%" }}
        />
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              width: "100%",
              marginTop: 40,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <Text>Hey</Text>
            <Text>Hey</Text>
          </View>
          <View style={{ flexGrow: 1 }} />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Darlene Robertson
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: theme.colors.background,
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              09:12
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 70,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 20,
              marginBottom: 70,
            }}
          >
            <Image
              source={require("../shapes/Mic.png")}
              style={{ width: 70, height: 70 }}
              resizeMode="contain"
            />

            <Image
              source={require("../shapes/End.png")}
              style={{ marginLeft: 40, width: 70, height: 70 }}
              resizeMode="contain"
            />

            <Image
              source={require("../shapes/Video.png")}
              style={{ marginLeft: 40, width: 70, height: 70 }}
              resizeMode="contain"
              onProgress={() => {
                console.log("hi");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InCallScreen;
