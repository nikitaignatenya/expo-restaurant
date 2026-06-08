import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
const background = require("../../src/assets/background.png");

export default function MainScreen() {
  const router = useRouter();
  return (
    <>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View
          style={{
            marginTop: 30,
            alignItems: "flex-start",
            width: "100%",
            paddingHorizontal: 17,
          }}
        >
          <Text
            style={{
              maxWidth: 187,
              fontFamily: "roboto-bold",
              color: "white",
              fontSize: 24,
            }}
          >
            Choose the FOOD you LOVE
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  border: {
    borderBottomColor: "#918B8B",
    borderBottomWidth: 1,
    paddingVertical: 14,
    marginTop: 26,
    color: "#766F6F",
    fontFamily: "roboto-regular",
  },
});
