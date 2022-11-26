import { Image, SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";

const InCallScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: "100%" }}>
        <Image
          source={require("../shapes/People/01.png")}
          resizeMethod={"scale"}
          style={{ overflow: "hidden", width: "100%", height: "100%" }}
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
          <Text>Hi</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InCallScreen;
